import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { environment } from 'src/environments/environment';
import { MovieAPI, MovieAPIRec } from 'src/app/models/movieAPI.models';
import { MovieVideo } from 'src/app/models/movieVideo.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { select, Store } from '@ngrx/store';
import { CartItem } from 'src/app/features/cart/cart.model';
import { CartState } from 'src/app/features/cart/store/cart-store.models';
import { cartItemsSelector, cartStateSelector } from 'src/app/features/cart/store/cart.selector';
import { cartAddItem } from 'src/app/features/cart/store/cart.actions';
import { CartService } from 'src/app/features/cart/services/cart.service';


@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss'],
})
export class MoviesInfoComponent implements OnInit, OnDestroy {
 cartItems$: CartItem[] | any = [];
  constructor(
    private movieService: MoviesService,
    private activatedRoute: ActivatedRoute,
    public cartService: CartService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private store: Store<CartState>
  ) {}

  private subscription = new Subscription();
  urlPath = environment.imgAPI;
  yt = environment.YT;

  // para el video!!
  movies!: MovieVideo;

  movie!: MovieAPI;
  // Recomendaciones
  similarMovie: MovieAPIRec[] = [];
  status: string= "";
  ngOnInit(): void {
    // traigo desde la api
    this.subscription.add(
      this.movieService
        .getDetailAPI(this.activatedRoute.snapshot.params['id'])
        .subscribe((response) => {
          this.movie = response;
        })
    );
    // el video
    this.subscription.add(
      this.movieService
        .getVideoAPI(this.activatedRoute.snapshot.params['id'])
        .subscribe((response) => {
          this.movies = response;
        })
    );
    // similar movies
    this.subscription.add(
      this.movieService
        .getSimilarMovies(this.activatedRoute.snapshot.params['id'])
        .subscribe((response) => {
          this.similarMovie = response.results;
        })
    );

    // carrito
    this.cartItems$ = this.store.pipe(
      select(cartItemsSelector),
      tap((data) => console.log(data))
    );
// status de la api
    this.store.pipe(
      select(cartStateSelector),
      tap(data => {
        console.log("Answer from API", data);
      })
    ).subscribe(data => {
      this.status = data.status
  });
  }

  getMovieURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.yt + this.movies?.results[0].key
    );
  }

  addToCart() {
    const id = this.movie.id;
    const title = this.movie.title;
    const poster_path = this.movie.poster_path;
    this.store.dispatch(cartAddItem({ id, title, poster_path }));
    if (this.status === "added" ){
          Swal.fire('Congrats!', 'You added the movie!', 'success');
        }else{
          Swal.fire('Nope!', 'You have  already added the movie!', 'error');
        }
    // esto esta funcionando mal xq la primera vez que la seleccionas no te deja, recien al segundo click si
  }

  redirectTo(id: number) {
    this.router
      .navigateByUrl('movies', { skipLocationChange: true })
      .then(() => this.router.navigate(['movies', id]));
  }

  moreInfo(id: number) {
    this.redirectTo(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
