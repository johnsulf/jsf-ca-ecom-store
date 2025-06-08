/**
 * Cart reducer module.
 *
 * @module CartReducer
 * @description Handles cart state updates in response to dispatched actions.
 */
import { CartAction, CartState } from './types';

/**
 * Initial state for the shopping cart.
 */
export const initialCartState: CartState = { items: [] };

/**
 * Reducer to manage cart state based on dispatched actions.
 *
 * @param state - Current cart state.
 * @param action - Action to apply to the cart.
 * @returns The updated cart state.
 */
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
