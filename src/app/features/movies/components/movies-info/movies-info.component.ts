import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { MovieAPI } from 'src/app/models/movieAPI.models';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss']
})
export class MoviesInfoComponent implements OnInit,OnDestroy {

  constructor(
  private movieService: MoviesService,
  private activatedRoute : ActivatedRoute,
  public cartService: CartService
  ) { }

  private subscription : Subscription | undefined;
  urlPath = environment.imgAPI;

 movie!:MovieAPI;
  ngOnInit(): void {
    // traigo las pelis desde el mock
    // this.subscription = this.movieService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(
    //   movies => {
    //     if (movies != undefined) this.movie = movies;
    //     else alert('Error during process');
    //   });

    // traigo desde la api
    this.subscription = this.movieService.getDetailAPI(this.activatedRoute.snapshot.params['id']).subscribe(
      response => { this.movie = response;});

  }
  ngOnDestroy(): void {
    //Al salir se desucribe
      this.subscription?.unsubscribe();
  }
  addToCart(movie: MovieAPI){

    this.cartService.addMovie(movie);

  }















}

