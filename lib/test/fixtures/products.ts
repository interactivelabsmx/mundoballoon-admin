import {
  randProductDescription,
  randProductName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';

export const getFixtureProduct = (): ProductEntityFragment => ({
  description: randProductDescription(),
  name: randProductName(),
  price: randFloat(),
  productCategoryId: randNumber(),
  productId: randNumber(),
});

export const getFixtureProducts = (count = 5): ProductEntityFragment[] => {
  const products: ProductEntityFragment[] = [];
  for (let index = 0; index < count; index++) {
    products.push(getFixtureProduct());
  }
  return products;
};
