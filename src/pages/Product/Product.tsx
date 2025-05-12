import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '@/api/product-api'
import { Product as ProductType } from '@/types/product'
import { useCart } from '@/providers/cart'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Star, StarHalf } from 'lucide-react'

export interface IProductProps {}

export default function Product(props: IProductProps) {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()

  const [product, setProduct] = useState<ProductType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    getProductById(id)
      .then((p) => setProduct(p))
      .catch((err) =>
        setError(err instanceof Error ? err.message : 'Unknown error')
      )
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading product…</p>
  if (error) return <p className="text-red-600">Error: {error}</p>
  if (!product) return <p>Product not found.</p>

  const {
    title,
    description,
    image,
    price,
    discountedPrice,
    reviews,
    rating,
  } = product

  const hasDiscount = discountedPrice < price
  const discountPct = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-muted-foreground">
        <a href="/">Home</a> &gt;{' '}
        {title}
      </nav>
      {/* Hero */}
      <Card className="flex flex-col md:flex-row">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full md:w-1/2 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
        />

        <CardContent className="flex-1 p-6">
          <h1 className="mb-4">{title}</h1>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex items-center space-x-4 mb-6">
            <p className="text-2xl font-semibold">${discountedPrice}</p>
            {hasDiscount && (
              <>
                <p className="text-sm line-through text-muted-foreground">
                  ${price}
                </p>
                <span className="rounded bg-red-500 px-2 py-1 text-sm text-white">
                  –{discountPct}%
                </span>
              </>
            )}
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>

      {/* Reviews */}
      <section>
        <h2 className="mb-4">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-muted-foreground">No reviews yet.</p>
        ) : (
          <ul className="space-y-6">
            {reviews.map((r) => (
              <li key={r.id} className="space-y-1">
                <p className="font-medium">{r.username}</p>
                <div className="flex items-center space-x-2 text-yellow-500">
                  {Array.from({ length: Math.floor(r.rating) }).map((_, i) => (
                    <Star key={i} />
                  ))}
                  {r.rating % 1 >= 0.5 && <StarHalf />}
                </div>
                <p className="text-muted-foreground">{r.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
