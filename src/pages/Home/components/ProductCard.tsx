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
  const discount: boolean = product.discountedPrice < product.price;
  const discountPercentage: number = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle className="relative">
          <img
            className="h-48 w-full rounded-t-xl object-cover"
            src={product.image.url}
            alt={product.image.alt}
          />
          {discount && (
            <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl bg-red-500 p-2 text-white">
              <p> -{discountPercentage}%</p>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2>{product.title}</h2>
        <p className="text-muted-foreground text-xs">{product.description}</p>
        <div className="my-2 flex items-center justify-between">
          <p className="text-2xl">${product.discountedPrice}</p>
          <div className="flex items-center">
            {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
              <Star key={i} className="text-yellow-500" />
            ))}
            {product.rating % 1 >= 0.5 && (
              <StarHalf className="text-yellow-500" />
            )}
            {product.rating === 0 && (
              <p className="text-muted-foreground">No reviews</p>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ArrowRight /> More details
        </Button>
      </CardFooter>
    </Card>
  );
}
