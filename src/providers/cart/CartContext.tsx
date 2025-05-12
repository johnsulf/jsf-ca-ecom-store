import {
    createContext,
    useReducer,
    useContext,
    ReactNode,
  } from 'react'
  import { CartItem, CartState } from './types'
  import { cartReducer, initialCartState } from './reducer'
import { Product } from '@/types/product'
  
  interface CartContextType {
    items: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
  }
  
  const CartContext = createContext<CartContextType | undefined>(undefined)
  
  export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer<CartState, CartState>(
      cartReducer,
      initialCartState
    )
  
    const addToCart = (product: Product) =>
      dispatch({ type: 'ADD_ITEM', product })
    const removeFromCart = (productId: string) =>
      dispatch({ type: 'REMOVE_ITEM', productId })
    const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  
    return (
      <CartContext.Provider
        value={{ items: state.items, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    )
  }
  
  export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used within CartProvider')
    return ctx
  }