import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { MovieAPI } from 'src/app/models/movieAPI.models';
import { MovieVideo } from 'src/app/models/movieVideo.model';
import { DomSanitizer } from '@angular/platform-browser';

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
  private sanitizer: DomSanitizer
  ) { }

  private subscription : Subscription | undefined;
  urlPath = environment.imgAPI;
  yt=environment.YT;

// para el video!!
movies!: MovieVideo;

 movie!:MovieAPI;

  ngOnInit(): void {

    // traigo desde la api
    this.subscription = this.movieService.getDetailAPI(this.activatedRoute.snapshot.params['id']).subscribe(
      response => { this.movie = response;});
      // el video
      this.subscription = this.movieService.getVideoAPI(this.activatedRoute.snapshot.params['id']).subscribe(
        response => { this.movies = response;});
  }

  // getVideo(){
  //   // solo para chequear que el getVideo funcione
  //     console.log(this.movies);
  //     console.log(this.movies.results[0 ].key);
  // }

  getMovieURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.yt + this.movies?.results[0].key);
  }
  addToCart(movie: MovieAPI){
    this.cartService.addMovie(movie);
  }

  ngOnDestroy(): void {
    //desuscripcion
      this.subscription?.unsubscribe();
  }
















}

