import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieAPI, MoviesAPI } from 'src/app/models/movieAPI.models';
import { environment } from 'src/environments/environment';
import { MoviesModule } from '../movies.module';
import { moviesMock } from './movies.mock';

@Injectable()
export class MoviesService {

private url = environment.movieApi;
private parte1 = environment.firstPart;
private parte2 = environment.lastPart;
  constructor(
     //inyecto httpClient
     private httpClient: HttpClient

  ) { }



  // getList(): Observable<Movie[]> {
  //   return of(moviesMock);
  // }


  // traigo las pelis desde la API
  getListAPI(): Observable<MoviesAPI>{
    return this.httpClient.get<MoviesAPI>(this.url);

  }

  // getDetail(id: string): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movie => movie.id === id ))
  // }
//-------------------------------------------------------------------//
  // getDetail(id: number): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movie => movie.id === id ))
  // }
  getDetailAPI(id: number) : Observable<MovieAPI>{
    return this.httpClient.get<MovieAPI>(`${this.parte1}/${id}${this.parte2}`);

  }

  getMovieById(id: number): Observable<MoviesAPI> {
    return this.httpClient.get<MoviesAPI>(`${this.url}/${id}`);
  }


}

// donde se usa?
  // getMovieById(id : String): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movies => movies.id === id));
  // }

  // getMovieByTitle(title : String): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movies => movies.title === title));
  // }


