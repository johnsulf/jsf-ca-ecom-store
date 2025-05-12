import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@/types/product';
import { ArrowRight, Star, StarHalf } from 'lucide-react';

export interface IProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: IProductCardProps) {
  const discount = product.discountedPrice < product.price;
  const discountPercentage = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="relative p-0">
          <img
            className="h-48 w-full rounded-t-xl object-cover"
            src={product.image.url}
            alt={product.image.alt}
          />
          {discount && (
            <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl bg-red-500 px-2 py-1 text-white text-sm">
              –{discountPercentage}%
            </div>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className="font-semibold">{product.title}</h2>
        <p className="text-muted-foreground text-xs mb-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl">${product.discountedPrice}</p>
          <div className="flex items-center">
            {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
              <Star key={i} className="text-yellow-500" />
            ))}
            {product.rating % 1 >= 0.5 && <StarHalf className="text-yellow-500" />}
            {product.rating === 0 && (
              <p className="text-muted-foreground text-xs">No reviews</p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-0 mt-auto">
        <Button className="w-full rounded-none rounded-b-xl">
          <ArrowRight className="mr-2" /> More details
        </Button>
      </CardFooter>
    </Card>
  );
}

