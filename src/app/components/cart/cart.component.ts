// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   clearCart(){
//     this.list = this.cartService.clearCart();
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieAPI } from 'src/app/models/movieAPI.models';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 // public list: Movie[] = [];
  public list: MovieAPI[] = [];
  constructor(private cartService: CartService) { }
  urlPath = environment.imgAPI;
  ngOnInit(): void {
    this.cartService.getList().subscribe(list => this.list = list);
  }

  removeMovie(movie: MovieAPI){
    this.cartService.removeMovie(movie);
  }

  clearCart(){
    this.list = this.cartService.clearCart();
  }
}
