import { screen } from '@testing-library/react';
import renderWithGraphql from '@lib/utils/renderWithGraphql';
import AddProductForm from '@components/Products/AddProductForm';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Add Product', () => {
  it('should render the Add Product Form', async () => {
    await renderWithGraphql(<AddProductForm />);
    expect(screen.getByText('Product Name')).not.toBeNull();
  });
});
