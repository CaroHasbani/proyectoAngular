import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: Movie[] = [];

  constructor() { }

  getList(): Observable<Movie[]> {
    return of(this.list);
  }

  addMovie(movie: Movie) {
    //if (this.list.indexOf( (m: Movie) => m.id === movie.id) ) {
      this.list.push(movie);
    //}
    console.log(this.list);
  }

  removeMovie(movie: Movie) {
    // tengo que remover del array el movie que coincida
  }
}
