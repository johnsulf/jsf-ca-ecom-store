import { Product } from '@/types/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'CLEAR_CART' };
