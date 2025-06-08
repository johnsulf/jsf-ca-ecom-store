/**
 * Checkout page component module.
 *
 * @module CheckoutPage
 * @description Clears cart on mount and displays order confirmation.
 */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/providers/cart'
import { Button } from '@/components/ui/button'

/**
 * Checkout component that thanks users for their order.
 *
 * On mount, clears the shopping cart.
 *
 * @component
 * @returns The checkout confirmation page.
 */
export default function Checkout() {
  const { clearCart } = useCart()

  /**
   * Clears the cart when the component mounts.
   */
  useEffect(() => {
    clearCart()
  }, [])
  
  return (
    <div className="max-w-md mx-auto mt-20 text-center space-y-6">
      <h1>Thank you for your order!</h1>
      <p>Your purchase was successful. We’re getting your items ready to ship.</p>
      <Link to="/">
        <Button size="lg">Back to store</Button>
      </Link>
    </div>
  )
}
