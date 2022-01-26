
// import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { MovieAPI } from 'src/app/models/movieAPI.models';
// import { CartService } from 'src/app/services/cart.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {

// private subscription= new Subscription;
// public list: MovieAPI[] = [];
//  isNotEmpy=false;

//   constructor(private cartService: CartService) { }
//   urlPath = environment.imgAPI;
//   ngOnInit(): void {
//     this.subscription.add(this.cartService.getList().subscribe(response => {
//       this.list = response;
//       if (this.list.length >0){
//         this.isNotEmpy=true;
//       }
//     }));
//   }
//   remove(id:number){
//     this.cartService.removeMovie(id).subscribe(response=>{
//       console.log( response)
//       this.subscription.add(this.cartService.getList().subscribe(response => this.list = response)) ;
//     });
//   }
//   clearCart(){
//      this.subscription.add(this.cartService.clear().subscribe(response => this.list = response));
//   }
//   ngOnDestroy():void{
//     // para que se borren los datos al salir
//     this.subscription.unsubscribe();
//   }
// }


import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from './cart.model';
import { CartState } from './store/cart-store.models';
import { cartAddItem, cartClear, cartDeleteItem } from './store/cart.actions';
import { cartItemsSelector } from './store/cart.selector';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 // private idSeed = 1;
  urlPath = environment.imgAPI;

  cartItems$!: Observable<CartItem[]>;

  constructor(
    private store: Store<CartState>
  ) { }

  ngOnInit(): void {
  //  this.store.dispatch(AppSetTitle({title: 'Cart'}));

    this.cartItems$ = this.store.pipe(
      select(cartItemsSelector)
      // ,
      // tap(data => console.log(data))
    );
  }

  // addOneItem() {
  //   const item: CartItem = { id: String(this.idSeed), movie: {name: `item ${this.idSeed}`}};
  //   this.idSeed++;
  //   this.store.dispatch(cartAddItem({ item }));
  // }

  removeItem(id: number) {
    this.store.dispatch(cartDeleteItem({ itemId: id }));
  }

  clearCart() {
  //   this.store.dispatch(cartClear());
  }
}
