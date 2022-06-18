import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AddProduct from '@pages/admin/products/add';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('AddProduct', () => {
  it('should render AddProduct', async () => {
    await renderWithGraphql(<AddProduct />);
    expect(screen.getByText('Add Product')).not.toBeNull();
  });
});
