import { CartItem } from '../cart.model';

export interface CartState {
  status: string,
  items: CartItem[];
}
