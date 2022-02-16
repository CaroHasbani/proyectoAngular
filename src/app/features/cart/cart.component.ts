import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from './cart.model';
import { CartState } from './store/cart-store.models';
import { cartClear, cartDeleteItem } from './store/cart.actions';
import { cartItemsSelector, cartStateSelector } from './store/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  urlPath = environment.imgAPI;
  cartItems$: Observable<CartItem[]> | any = [];

  constructor(
    private store: Store<CartState>,
    ) {}

  ngOnInit(): void {
    this.store.pipe(
      select(cartStateSelector),
    ).subscribe(data => {
      this.cartItems$ = data.items
  });
}

  removeItem(id: number) {
    this.store.dispatch(cartDeleteItem({ itemId: id }));
  }

  clearCart() {
    this.store.dispatch(cartClear());
    this.cartItems$ = this.store.pipe(select(cartItemsSelector));
  }
}
