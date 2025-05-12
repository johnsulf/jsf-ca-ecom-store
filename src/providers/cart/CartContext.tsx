import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import { CartItem, CartState } from './types'
import { cartReducer, initialCartState } from './reducer'
import { Product } from '@/types/product'

const STORAGE_KEY = 'myapp-cart'

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function init(initialState: CartState): CartState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored) as CartState
    }
  } catch {
    // invalid JSON, ignore
  }
  return initialState
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    init
  )

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // handle error TODO
    }
  }, [state])

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
