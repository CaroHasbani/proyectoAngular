import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { CartService } from 'src/app/services/cart.service';
import { MovieAPI } from 'src/app/models/movieAPI.models';
import { environment } from 'src/environments/environment';
import { MovieVideo } from 'src/app/models/movieVideo.model';
import { NumberInput } from '@angular/cdk/coercion';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy{

  constructor(
    private movieService: MoviesService,
    private router: Router,
    public cartService: CartService
  ) { }

//Suscripcion

private subscription= new Subscription;
urlPath = environment.imgAPI;
movies: MovieAPI[] = [];

  ngOnInit(): void {
    // traigo las pelis desde el mock
  // this.movieService.getList().subscribe( movies => this.movies = movies);

    // traigo las pelis desde la api
    this.subscription.add(this.movieService.getListAPI().subscribe(response => {
        this.movies = response.results;
        console.log(this.movies)
    }));

  }

  //navigateToDetail(id: string)
  moreInfo(id: number){
    this.router.navigate(['movies', id]);
  }

  // addToCart(id:number){
  //   this.cartService.addMovie(id);
  // }

  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription.unsubscribe();
  }
}