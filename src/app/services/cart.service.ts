import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieAPI } from '../models/movieAPI.models';
// import {Swal} from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 // private list: Movie[] = [];
  private list: MovieAPI[] = [];
  constructor() { }

  getList(): Observable<MovieAPI[]> {
    return of(this.list);
  }

  addMovie(movie: MovieAPI) {
      this.list.push(movie);
    // console.log(this.list);
    // Swal("Movie added to cart");
   //Swal.fire('Movie added to cart')
   alert ('Movie added to cart');

  }

  removeMovie(movie: MovieAPI) {
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




