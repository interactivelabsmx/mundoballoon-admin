import { screen } from '@testing-library/react';
import AddProductVariantRoute from '@pages/admin/products/variants/add/[pid]';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('AddProductVariantRoute', () => {
  it('should render AddProductVariantRoute', async () => {
    await renderWithGraphql(<AddProductVariantRoute />);
    expect(screen.getByText('Add Product Variants')).not.toBeNull();
    expect(screen.getByText('Loading...')).not.toBeNull();
  });

  it('should render AddProductVariantRoute', async () => {
    await renderWithGraphql(<AddProductVariantRoute />);
    expect(screen.getByText('Add Product Variants')).not.toBeNull();
    const label = await screen.findByText('Product SKU');
    expect(label).not.toBeNull();
  });
});
