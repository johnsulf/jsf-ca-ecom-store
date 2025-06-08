/**
 * Product page component module.
 *
 * @module ProductPage
 * @description Fetches and displays a single product detail, including image, pricing, and reviews.
 */
import { getProductById } from '@/api/product-api';
import Rating from '@/components/Rating';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/providers/cart';
import { Product as ProductType } from '@/types/product';
import { useEffect, useState } from 'react';
import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

/**
 * Product component to display details for a single product.
 *
 * Fetches product data by ID from route parameters, handles loading and error states,
 * and provides an action to add the product to the cart with a toast notification.
 *
 * @component
 * @returns The product detail page content.
 */
export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getProductById(id)
      .then((p) => setProduct(p))
      .catch((err) =>
        setError(err instanceof Error ? err.message : 'Unknown error'),
      )
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product…</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  const { title, description, image, price, discountedPrice, reviews } =
    product;

  const hasDiscount = discountedPrice < price;
  const discountPct = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  /**
   * Adds the current product to the cart and shows a success toast.
   */
  function handleAdd() {
    addToCart(product!);
    toast.success(`"${product!.title}" added to cart`);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Hero */}
      <Card className="flex flex-col md:flex-row">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full rounded-t-xl object-cover md:w-1/2 md:rounded-l-xl md:rounded-tr-none"
        />

        <CardContent className="flex-1 p-6">
          <h1 className="mb-4">{title}</h1>
          <Rating
            rating={product.rating}
            reviewsCount={product.reviews.length}
          />
          <p className="text-muted-foreground my-4">{description}</p>

          <div className="mb-6 flex items-center space-x-4">
            <p className="text-2xl font-semibold">${discountedPrice}</p>
            {hasDiscount && (
              <>
                <p className="text-muted-foreground text-sm line-through">
                  ${price}
                </p>
                <span className="rounded bg-red-500 px-2 py-1 text-sm text-white">
                  –{discountPct}%
                </span>
              </>
            )}
          </div>

          <Button onClick={handleAdd}>Add to cart</Button>
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
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: Math.floor(r.rating) }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {Array.from({
                    length:
                      5 - Math.floor(r.rating) - (r.rating % 1 >= 0.5 ? 1 : 0),
                  }).map((_, i) => (
                    <FaRegStar key={i + Math.floor(r.rating)} />
                  ))}
                  {r.rating % 1 >= 0.5 && <FaStarHalfStroke />}

                  <span className="text-primary ml-2 text-sm">
                    {Number.isInteger(r.rating)
                      ? r.rating
                      : r.rating.toFixed(0)}{' '}
                    / 5
                  </span>
                </div>
                <p className="text-muted-foreground">{r.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
