import { Button } from '@/components/ui/button'
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Product } from '@/types/product'
import { ArrowRight, Star, StarHalf } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export interface IProductCardProps {
  product: Product
}

export default function ProductCard({ product }: IProductCardProps) {
  const navigate = useNavigate()
  const { price, discountedPrice, rating, image, title, description, id } = product
  const hasDiscount = discountedPrice < price
  const discountPct = Math.round(((price - discountedPrice) / price) * 100)

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="relative p-0">
          <img
            className="h-48 w-full rounded-t-xl object-cover"
            src={image.url}
            alt={image.alt}
          />
          {hasDiscount && (
            <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl bg-red-500 px-2 py-1 text-white text-sm">
              –{discountPct}%
            </div>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-muted-foreground text-xs mb-2">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl">${discountedPrice}</p>
          <div className="flex items-center">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <Star key={i} className="text-yellow-500" />
            ))}
            {rating % 1 >= 0.5 && <StarHalf className="text-yellow-500" />}
            {rating === 0 && (
              <p className="text-muted-foreground text-xs">No reviews</p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-0 mt-auto">
        <Button
          className="w-full rounded-none rounded-b-xl"
          onClick={() => navigate(`/product/${id}`)}
        >
          <ArrowRight className="mr-2" /> More details
        </Button>
      </CardFooter>
    </Card>
  )
}
