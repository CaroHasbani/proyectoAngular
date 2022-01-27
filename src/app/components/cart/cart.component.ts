import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from './cart.model';
import { CartState } from './store/cart-store.models';
import {  cartClear, cartDeleteItem } from './store/cart.actions';
import { cartItemsSelector } from './store/cart.selector';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  urlPath = environment.imgAPI;
  // isNotEmpty=false;

  cartItems$!: Observable<CartItem[]>;

  constructor(
    private store: Store<CartState>
  ) { }

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(
      select(cartItemsSelector),
      tap(data => console.log(data)),
    );

    // hay que meterlo adentro
    // if (cartItemsSelector.length >0){
    //   this.isNotEmpty=true;
    //   console.log( "is no empty"+ this.isNotEmpty);

    // }
  }


  removeItem(id: number) {
    this.store.dispatch(cartDeleteItem({ itemId: id }));
  }

  clearCart() {
  this.store.dispatch(cartClear())
  this.cartItems$ = this.store.pipe(
    select(cartItemsSelector));
}
}
