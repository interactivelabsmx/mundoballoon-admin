import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AddProductVariantRoute from '@pages/admin/products/variants/add/[pid]';
import { getFixtureProduct } from '@lib/test/fixtures/products';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('AddProductVariantRoute', () => {
  it('should render AddProductVariantRoute', async () => {
    await renderWithGraphql(<AddProductVariantRoute />);
    expect(screen.getByText('Add Product Variant')).not.toBeNull();
    expect(screen.getByText('Loading...')).not.toBeNull();
  });

  it('should render AddProductVariantRoute', async () => {
    await renderWithGraphql(<AddProductVariantRoute />, {
      Query: { productById: () => getFixtureProduct() },
    });
    expect(screen.getByText('Add Product Variant')).not.toBeNull();
    const label = await screen.findByText('Product SKU');
    expect(label).not.toBeNull();
  });
});
