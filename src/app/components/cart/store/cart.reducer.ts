import { createReducer, on } from '@ngrx/store';
import { CartState } from './cart-store.models';
import { cartSetContent } from './cart.actions';


export const cartInitialState: CartState = { items: [] };

const _cartReducer = createReducer(
  cartInitialState,
  on(cartSetContent, (state, { items }) => {
      return {
      ...state,
      items,
    };
  })
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
