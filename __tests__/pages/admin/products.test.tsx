import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Products from '@pages/admin/products';
import { getFixtureProducts } from '@lib/test/fixtures/products';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Products', () => {
  it('should render Products', async () => {
    await renderWithGraphql(<Products />);
    expect(screen.getByText('Loading...')).not.toBeNull();
  });
  it('should render Products table', async () => {
    await renderWithGraphql(<Products />, {
      Query: {
        productsEntity: () => ({
          __typename: 'ProductsEntityConnection',
          nodes: getFixtureProducts(),
          pageInfo: {
            __typename: 'PageInfo',
            hasNextPage: false,
            endCursor: null,
            hasPreviousPage: false,
            startCursor: null,
          },
        }),
      },
    });
    expect(screen.getByText('Loading...')).not.toBeNull();
    const table = await screen.findByRole('table');
    expect(table).not.toBeNull();
  });
});
