

/**
 * Home page component module.
 *
 * @module HomePage
 * @description Fetches and displays a list of products with search functionality.
 */
import { getAllProducts } from '@/api/product-api'
import { Product } from '@/types/product'
import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'

/**
 * Home component that displays product listings.
 *
 * Fetches products on mount, handles loading and error states,
 * and provides a search bar to filter products by title.
 *
 * @component
 * @returns The content for the home page, including loading, error, and product grid.
 */
export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    /**
     * Fetches product data from the API, updating state and managing loading/error statuses.
     */
    async function fetchData() {
      setLoading(true)
      try {
        setProducts(await getAllProducts())
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Products</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search products…"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="mt-6 w-full rounded border px-3 py-2 focus:outline-none focus:ring"
      />

      {/* Product grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
