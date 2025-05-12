
import { Button } from '@/components/ui/button'
import { useCart } from '@/providers/cart'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartIcon() {
  const { items } = useCart()
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <Link to="/cart" className="relative inline-block">
      <Button variant="default" size="icon" aria-label="Go to cart">
        <ShoppingCart />
      </Button>
      {totalCount > 0 && (
        <span
          className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white"
          aria-label={`${totalCount} items in cart`}
        >
          {totalCount}
        </span>
      )}
    </Link>
  )
}
