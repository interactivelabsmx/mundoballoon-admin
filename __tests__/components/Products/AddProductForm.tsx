import { screen } from '@testing-library/react';
import AddProductForm from '@components/Products/AddProductForm';
import renderWithGraphql from '../../../lib/utils/renderWithGraphql';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Add Product', () => {
  it('should render the Add Product Form', async () => {
    await renderWithGraphql(<AddProductForm />, {
      mocks: {},
    });
    expect(screen.getByText('Product Name')).not.toBeNull();
  });
});
