/**
 * Cart context module.
 *
 * @module CartContext
 * @description Provides context and hooks for managing the shopping cart state.
 */
import { Product } from '@/types/product';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { cartReducer, initialCartState } from './reducer';
import { CartItem, CartState } from './types';

/**
 * LocalStorage key for persisting cart state.
 */
const STORAGE_KEY = 'myapp-cart';

/**
 * Context value for cart operations.
 *
 * @interface CartContextType
 * @property {CartItem[]} items - The items currently in the cart.
 * @property {(product: Product) => void} addToCart - Function to add a product to the cart.
 * @property {(id: string) => void} removeFromCart - Function to remove a product from the cart by ID.
 * @property {() => void} clearCart - Function to clear all items from the cart.
 */
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Initializes cart state from localStorage or falls back to the provided initial state.
 *
 * @param initialState - Default cart state.
 * @returns The restored or default cart state.
 */
function init(initialState: CartState): CartState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as CartState;
    }
  } catch (err) {
    console.error('Failed to load cart from localStorage', err);
  }
  return initialState;
}

/**
 * CartProvider component to wrap parts of the app with cart context.
 *
 * @component
 * @param props - The component props.
 * @returns The provider wrapping children with cart state and actions.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState, init);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('Failed to save cart to localStorage', err);
    }
  }, [state]);

  const addToCart = (product: Product) =>
    dispatch({ type: 'ADD_ITEM', product });

  const removeFromCart = (productId: string) =>
    dispatch({ type: 'REMOVE_ITEM', productId });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Hook to consume cart context.
 *
 * @function useCart
 * @returns The current cart context value.
 * @throws If called outside of a CartProvider.
 */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
