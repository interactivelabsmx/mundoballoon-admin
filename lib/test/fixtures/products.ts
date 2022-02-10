import {
  randProductDescription,
  randProductName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { Product } from '@graphql/graphql';

export const getFixtureProduct = (): Product => ({
  description: randProductDescription(),
  name: randProductName(),
  price: randFloat(),
  productCategoryId: randNumber(),
  productId: randNumber(),
});

export const getFixtureProducts = (count = 5): Product[] => {
  const products: Product[] = [];
  for (let index = 0; index < count; index++) {
    products.push(getFixtureProduct());
  }
  return products;
};
