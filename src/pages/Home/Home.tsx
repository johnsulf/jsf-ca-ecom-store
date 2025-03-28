import { getAllProducts } from '@/api/product-api';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const all = await getAllProducts();
        setProducts(all);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
