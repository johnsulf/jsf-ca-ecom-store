/**
 * Module containing product-related data models and API response interfaces.
 *
 * @module ProductTypes
 */

/**
 * API response for fetching a single product.
 *
 * @interface ProductResponse
 */
export interface ProductResponse {
  data: Product;
  meta: Record<string, unknown>;
}

/**
 * API response for fetching a paginated list of products.
 *
 * @interface ProductsResponse
 */
export interface ProductsResponse {
  data: Product[];
  /**
   * Pagination metadata for product listings.
   */
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}

/**
 * Represents a product in the store.
 *
 * @interface Product
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: Review[];
}

/**
 * Represents an image of a product, including its URL and alt text.
 *
 * @interface ProductImage
 */
export interface ProductImage {
  url: string;
  alt: string;
}

/**
 * Represents a user review of a product.
 *
 * @interface Review
 */
export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}
