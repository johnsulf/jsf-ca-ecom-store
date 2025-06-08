/**
 * ProductCard module.
 *
 * @module ProductCard
 * @description Renders a product summary card displaying image, pricing, rating, and navigation to details.
 */
import Rating from '@/components/Rating';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@/types/product';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Props for ProductCard component.
 *
 * @interface IProductCardProps
 * @property {Product} product - The product to display in the card.
 */
export interface IProductCardProps {
  product: Product;
}

/**
 * ProductCard component displaying key product details.
 *
 * Renders the product image, title, description, price, discount badge, and rating,
 * and enables navigation to the product details page.
 *
 * @component
 * @param props - Component props.
 * @returns The product card element.
 */
export default function ProductCard({ product }: IProductCardProps) {
  const navigate = useNavigate();
  const { price, discountedPrice, rating, image, title, description, id } =
    product;
  const hasDiscount = discountedPrice < price;
  const discountPct = Math.round(((price - discountedPrice) / price) * 100);

  return (
    <Link to={`/product/${id}`} className="no-underline">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="relative p-0">
            <img
              className="h-48 w-full rounded-t-xl object-cover"
              src={image.url}
              alt={image.alt}
            />
            {hasDiscount && (
              <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl bg-red-500 px-2 py-1 text-sm text-white">
                –{discountPct}%
              </div>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-muted-foreground mb-2 text-xs">{description}</p>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-2xl">${discountedPrice}</p>
            <Rating rating={rating} reviewsCount={product.reviews.length} />
          </div>
        </CardContent>

        <CardFooter className="mt-auto p-0">
          <Button
            className="w-full cursor-pointer rounded-none rounded-b-xl"
            onClick={() => navigate(`/product/${id}`)}>
            <ArrowRight className="mr-2" /> More details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
