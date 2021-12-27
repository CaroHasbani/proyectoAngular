import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CartService } from 'src/app/services/cart.service';

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


  movie!:Movie;
  ngOnInit(): void {

    this.subscription = this.movieService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(
      movies => {
        if (movies != undefined) this.movie = movies;
        else alert('Error during process');
      });
  }
  ngOnDestroy(): void {
    //Al salir se desucribe
      this.subscription?.unsubscribe();
  }
  addToCart(movie: Movie){
    // this.router.navigate(['cart', id]); no le pinta andar
    this.cartService.addMovie(movie);

  }
}

