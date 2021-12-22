import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
import { moviesMock } from './movies.mock';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

 // private url = environment.moviesRestApi;


  constructor() { }

  getDetail(id: string): Observable<Movie | undefined> {
    return of(moviesMock.find(movie => movie.id === id ))
  }

  getList(): Observable<Movie[]> {
    return of(moviesMock);
  }


  getMovieById(id : String): Observable<Movie | undefined> {

    return of(moviesMock.find(movies => movies.id === id));
  }
}
