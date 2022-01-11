import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { Movie } from 'src/app/models/movie.model';
import { MovieAPI, MoviesAPI, MoviesAPIRec } from 'src/app/models/movieAPI.models';
import { MovieVideo } from 'src/app/models/movieVideo.model';
import { environment } from 'src/environments/environment';
// import { MoviesModule } from '../movies.module';
// import { moviesMock } from './movies.mock';

@Injectable()
export class MoviesService {

private url = environment.movieApi;
private parte1 = environment.firstPart;
private parte2 = environment.lastPart;
private rec=environment.recAPI;
private last=environment.videoAPI2;
//private yt=environment.YT;
  constructor(
     //inyecto httpClient
     private httpClient: HttpClient
  ) { }

  // traigo las pelis desde la API
  getListAPI(): Observable<MoviesAPI>{
    return this.httpClient.get<MoviesAPI>(this.url);
  }

  getDetailAPI(id: number) : Observable<MovieAPI>{
    return this.httpClient.get<MovieAPI>(`${this.parte1}/${id}${this.parte2}`);
  }
  getVideoAPI(id:number):Observable<MovieVideo>{
    // hace el getVideo
    return this.httpClient.get<MovieVideo>(`${this.parte1}/${id}/${this.last}`);
  }

  getMovieById(id: number): Observable<MoviesAPI> {
    return this.httpClient.get<MoviesAPI>(`${this.url}/${id}`);
  }

  getSimilarMovies(id: number): Observable<MoviesAPIRec> {
    return this.httpClient.get<MoviesAPIRec>(`${this.parte1}/${id}/${this.rec}`);

  }

}



