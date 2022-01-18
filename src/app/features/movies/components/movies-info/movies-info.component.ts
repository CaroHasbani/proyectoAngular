import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { MovieAPI, MovieAPIRec } from 'src/app/models/movieAPI.models';
import { MovieVideo } from 'src/app/models/movieVideo.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss']
})
export class MoviesInfoComponent implements OnInit,OnDestroy {

  constructor(
  private movieService: MoviesService,
  private activatedRoute : ActivatedRoute,
  public cartService: CartService,
  private sanitizer: DomSanitizer,
  private router: Router

  ) { }

  private subscription= new Subscription;
  urlPath = environment.imgAPI;
  yt=environment.YT;

// para el video!!
movies!: MovieVideo;

 movie!:MovieAPI;
 // Rec
 similarMovie: MovieAPIRec[] = [];

  ngOnInit(): void {
    // traigo desde la api
    this.subscription.add(this.movieService.getDetailAPI(this.activatedRoute.snapshot.params['id']).subscribe(
      response => { this.movie = response;}));
      // el video
      this.subscription.add(this.movieService.getVideoAPI(this.activatedRoute.snapshot.params['id']).subscribe(
        response => { this.movies = response;})) ;
        // similar movies
        this.subscription.add(this.movieService.getSimilarMovies(this.activatedRoute.snapshot.params['id']).subscribe(response => {
          this.similarMovie = response.results;}));

  }

  getMovieURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.yt + this.movies?.results[0].key);
  }

  addToCart(){
    const id= this.movie.id
    const title= this.movie.title
    const poster_path=this.movie.poster_path
    this.subscription.add(this.cartService.addMovie(id, title,poster_path).subscribe(response=>{
      console.log(response);
      if (response.status === "ok"){
        Swal.fire('Congrats!', 'You added the movie!', 'success');
      }else{
        Swal.fire('Nope!', 'You have  already added the movie!', 'error');
      }
    }));
  }

  redirectTo(id:number){
    this.router.navigateByUrl('movies', {skipLocationChange: true}).then(()=>
    this.router.navigate([ 'movies', id]));
 }

  moreInfo(id: number){
    this.redirectTo(id);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}

