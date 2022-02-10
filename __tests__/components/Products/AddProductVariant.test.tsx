import { screen } from '@testing-library/react';
import { getFixtureProduct } from '@lib/test/fixtures/products';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import AddProductVariant from '@components/Products/AddProductVariant';

describe('Add Product variant', () => {
  it('should render the Add Product Form', async () => {
    await renderWithGraphql(
      <AddProductVariant product={getFixtureProduct()} />
    );
    expect(screen.getByText('Product Name')).not.toBeNull();
  });
});
