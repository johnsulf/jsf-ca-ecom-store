
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useCart } from '@/providers/cart'
import { toast } from 'sonner'

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  const total = items.reduce(
    (sum, i) => sum + i.product.discountedPrice * i.quantity,
    0
  )

  function handleClear() {
    clearCart()
    toast(`🗑️ Cart cleared`)
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="mb-4">Your cart is empty.</p>
        <Link to="/">
          <Button>Back to store</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Hero */}
      <h1 className='mb-8'>Cart</h1>
      <ul className="space-y-4">
        {items.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={product.image.url}
                alt={product.image.alt}
                className="h-16 w-16 object-cover"
              />
              <div>
                <p className="font-medium">{product.title}</p>
                <p className="text-sm">
                  ${product.discountedPrice} × {quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-semibold">
                ${(product.discountedPrice * quantity).toFixed(2)}
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(product.id)}
                aria-label="Remove item"
              >
                ×
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="flex items-center justify-between pt-4 border-t">
        <p className="text-lg font-bold">Total:</p>
        <p className="text-lg font-bold">${total.toFixed(2)}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button onClick={() => navigate('/checkout')}>
          Checkout
        </Button>
        <Button variant="outline" onClick={handleClear}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}