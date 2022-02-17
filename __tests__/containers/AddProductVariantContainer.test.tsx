import { screen } from '@testing-library/react';
import { getFixtureProduct } from '@lib/test/fixtures/products';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import AddProductVariantContainer from '@containers/Products/AddProductVariantContainer';

describe('Add Product variant', () => {
  it('should render the Add Product Form', async () => {
    await renderWithGraphql(
      <AddProductVariantContainer product={getFixtureProduct()} />
    );
    expect(screen.getByText('Product Name')).not.toBeNull();
  });
});
