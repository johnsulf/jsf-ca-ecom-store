import { describe, expect, it } from 'vitest';
import type { Product } from '../../types/product';
import { cartReducer, initialCartState } from './reducer';

describe('cartReducer', () => {
  const productA: Product = {
    id: '1',
    title: 'Test',
    description: 'desc',
    price: 10,
    discountedPrice: 10,
    image: { url: '', alt: '' },
    rating: 0,
    tags: [],
    reviews: [],
  };
  const productB: Product = {
    id: '2',
    title: 'Other',
    description: 'desc',
    price: 20,
    discountedPrice: 20,
    image: { url: '', alt: '' },
    rating: 0,
    tags: [],
    reviews: [],
  };

  it('adds new items', () => {
    const state = cartReducer(initialCartState, {
      type: 'ADD_ITEM',
      product: productA,
    });
    expect(state.items.length).toBe(1);
    expect(state.items[0].product).toBe(productA);
    expect(state.items[0].quantity).toBe(1);
  });

  it('increments quantity for existing items', () => {
    const start = { items: [{ product: productA, quantity: 1 }] };
    const state = cartReducer(start, { type: 'ADD_ITEM', product: productA });
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it('removes an item', () => {
    const start = {
      items: [
        { product: productA, quantity: 1 },
        { product: productB, quantity: 1 },
      ],
    };
    const state = cartReducer(start, { type: 'REMOVE_ITEM', productId: '1' });
    expect(state.items.length).toBe(1);
    expect(state.items[0].product.id).toBe('2');
  });

  it('clears the cart', () => {
    const start = { items: [{ product: productA, quantity: 1 }] };
    const state = cartReducer(start, { type: 'CLEAR_CART' });
    expect(state.items.length).toBe(0);
  });
});
