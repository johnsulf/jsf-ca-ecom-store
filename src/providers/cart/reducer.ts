import { CartAction, CartState } from './types';

export const initialCartState: CartState = { items: [] };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const idx = state.items.findIndex(
        (i) => i.product.id === action.product.id,
      );
      if (idx > -1) {
        const items = [...state.items];
        items[idx].quantity += 1;
        return { items };
      }
      return {
        items: [...state.items, { product: action.product, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((i) => i.product.id !== action.productId),
      };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}
