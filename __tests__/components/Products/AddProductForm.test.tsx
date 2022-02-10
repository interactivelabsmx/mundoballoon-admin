import { screen } from '@testing-library/react';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import AddProductForm from '@components/Products/AddProductForm';

describe('Add Product', () => {
  it('should render the Add Product Form', async () => {
    await renderWithGraphql(<AddProductForm />);
    expect(screen.getByText('Product Name')).not.toBeNull();
  });
});
