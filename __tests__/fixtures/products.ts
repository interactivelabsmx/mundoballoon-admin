import {
  randProductDescription,
  randProductName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { Product } from '@graphql/graphql';

export const getFixtureProducts = (count = 5): Product[] => {
  const products: Product[] = [];
  for (let index = 0; index < count; index++) {
    const product = {
      description: randProductDescription(),
      name: randProductName(),
      price: randFloat(),
      productCategoryId: randNumber(),
      productId: randNumber(),
    };
    products.push(product);
  }
  return products;
};
