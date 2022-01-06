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
  //     console.log(this.movies.results[0].key);
  // }

  getMovieURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.yt + this.movies?.results[0].key);
  }

  addToCart(){
    const id= this.movie.id
    const title= this.movie.title
    const poster_path=this.movie.poster_path
  this.cartService.addMovie(id, title,poster_path).subscribe(response=>console.log(response));
  alert("movie added")
  }

  ngOnDestroy(): void {
    //desuscripcion
      this.subscription?.unsubscribe();
  }
















}

