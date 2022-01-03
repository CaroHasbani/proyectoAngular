import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { CartService } from 'src/app/services/cart.service';
import { MovieAPI } from 'src/app/models/movieAPI.models';
import { environment } from 'src/environments/environment';
import { MovieVideo } from 'src/app/models/movieVideo.model';


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
private subscription : Subscription | undefined;
urlPath = environment.imgAPI;
movies: MovieAPI[] = [];

  ngOnInit(): void {
    // traigo las pelis desde el mock
  // this.movieService.getList().subscribe( movies => this.movies = movies);

    // traigo las pelis desde la api
      this.movieService.getListAPI().subscribe(response => {
        this.movies = response.results;
        console.log(this.movies)
    });

  }
  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription?.unsubscribe();
  }
  //navigateToDetail(id: string)
  moreInfo(id: number){
    this.router.navigate(['movies', id]);
  }

  addToCart(movie: MovieAPI){
    this.cartService.addMovie(movie);
  }
}
