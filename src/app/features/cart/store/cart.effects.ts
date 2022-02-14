import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CartItem } from '../cart.model';
import { CartService } from '../services/cart.service';
import {
  cartAddItem,
  cartClear,
  cartDeleteItem,
  cartSetContent,
} from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions: Actions, private cartService: CartService) {}

  cartAddItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartAddItem),
      switchMap((action) =>
        this.cartService.addMovie(action.id, action.title, action.poster_path)
      ),
      map((data) =>
        cartSetContent({
          status: data.status,
          items: data.cartContent as CartItem[],
        })
      )
    )
  );

  cartDeleteItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartDeleteItem),
      switchMap((action) => this.cartService.removeMovie(action.itemId)),
      map((data) =>
        cartSetContent({
          status: data.status,
          items: data.cartContent as CartItem[],
        })
      )
    )
  );

  cartClear$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartClear),
      switchMap((action) => this.cartService.clear()),
      map((data) =>
        cartSetContent({
          status: data.status,
          items: data.cartContent as CartItem[],
        })
      )
    )
  );
}
