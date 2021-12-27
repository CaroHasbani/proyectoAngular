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
      this.list.push(movie);
    //  this.clearCart()
    // console.log(this.list);
  }

  removeMovie(movie: Movie) {
    // tengo que remover del array el movie que coincida
    let index = this.list.indexOf(movie);
   return this.list.splice(index, 1);
  }
  clearCart(){
    return this.list = [];

  }
}



  // getMovies(){
  //   return this.list;
  // }




