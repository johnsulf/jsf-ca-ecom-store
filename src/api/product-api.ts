/**
 * Product API module.
 *
 * @module ProductAPI
 * @description Provides functions to fetch product data from the backend API.
 */
import { Product, ProductResponse, ProductsResponse } from '@/types/product';
import { BASE_API_URL } from './api';

/**
 * Fetches all products from the API.
 *
 * @async
 * @function getAllProducts
 * @returns A promise resolving to an array of Product objects.
 * @throws Error if the network response is not ok.
 */
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

/**
 * Fetches a single product by its ID.
 *
 * @async
 * @function getProductById
 * @param id - The ID of the product to fetch.
 * @returns A promise resolving to the Product object.
 * @throws Error if the network response is not ok.
 */
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
