import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import AddProductContainer from '@containers/Products/AddProductContainer';

describe('Add Product', () => {
  it('should render the Add Product Form', async () => {
    await renderWithGraphql(<AddProductContainer />);
    expect(screen.getByText('Product Name')).not.toBeNull();
  });
});
