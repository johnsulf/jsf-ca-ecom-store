/**
 * Cart context types module.
 *
 * @module CartTypes
 * @description Defines data models and actions for cart state management.
 */
import { Product } from '@/types/product';

/**
 * Represents an item in the cart.
 *
 * @interface CartItem
 * @property {Product} product - The product added to the cart.
 * @property {number} quantity - The quantity of the product in the cart.
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

/**
 * Represents the state of the shopping cart.
 *
 * @typedef CartState
 * @property {CartItem[]} items - Items currently in the cart.
 */
export type CartState = {
  items: CartItem[];
};

/**
 * Actions that can be dispatched to modify the cart.
 *
 * @typedef CartAction
 * @property {'ADD_ITEM'|'REMOVE_ITEM'|'CLEAR_CART'} type - Action type.
 * @property {Product} [product] - The product to add (for ADD_ITEM).
 * @property {string} [productId] - The ID of the product to remove (for REMOVE_ITEM).
 */
export type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'CLEAR_CART' };
