import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy{

  constructor(
    private movieService: MoviesService,
    private router: Router
  ) { }
//Suscripcion
private subscription : Subscription | undefined;
 movies: Movie[] = [];

  ngOnInit(): void {
   this.movieService.getList().subscribe( movies => this.movies = movies);
  }
  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription?.unsubscribe();
  }
  //navigateToDetail(id: string)
  moreInfo(id: string)
  {
    this.router.navigate(['movieInfo', id]);
  }
}
