import { Product, ProductResponse, ProductsResponse } from '@/types/product';
import { BASE_API_URL } from './api';

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(BASE_API_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status} ${response.statusText}`,
    );
  }

  // The API returns an object with { data: [...] }, so we parse accordingly
  const json: ProductsResponse = await response.json();
  return json.data;
}

// Get a single product by ID
export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${BASE_API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product ${id}: ${response.status} ${response.statusText}`,
    );
  }

  // The single product endpoint returns { data: { ... } }
  const json: ProductResponse = await response.json();
  return json.data;
}
