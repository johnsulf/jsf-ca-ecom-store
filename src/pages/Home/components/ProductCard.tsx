import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '@/types/product';

export interface IProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={product.image.url} alt={product.image.alt} />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Discounted price: {product.discountedPrice}</p>
        <p>Rating: {product.rating}</p>
        <p>Tags: {product.tags.join(', ')}</p>
        <p>Reviews:</p>
        <ul>
          {product.reviews.map((review) => (
            <li key={review.id}>
              <p>Username: {review.username}</p>
              <p>Rating: {review.rating}</p>
              <p>Description: {review.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
