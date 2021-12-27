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
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public list: Movie[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getList().subscribe(list => this.list = list);
  }

  removeMovie(movie: Movie){
    this.cartService.removeMovie(movie);
  }

  clearCart(){
    this.list = this.cartService.clearCart();
  }
}
