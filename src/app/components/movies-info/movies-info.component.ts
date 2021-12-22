import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss']
})
export class MoviesInfoComponent implements OnInit {

  constructor(
    private movieService: MoviesService,

  private activatedRoute : ActivatedRoute,
  ) { }
  private subscription : Subscription | undefined;


  movie!:Movie;
  ngOnInit(): void {


    this.subscription = this.movieService.getMovieById(this.activatedRoute.snapshot.params['id']).subscribe(
      movies => {
        if (movies != undefined) this.movie = movies;
        else alert('Error during process');
      });
  }
  ngOnDestroy(): void {
    //Al salir se desucribe
      this.subscription?.unsubscribe();
  }
}

