import { screen } from '@testing-library/react';
import Products from '@pages/admin/products';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Products', () => {
  it('should render Products', async () => {
    await renderWithGraphql(<Products />);
    expect(screen.getByText('Loading...')).not.toBeNull();
  });
  it('should render Products', async () => {
    await renderWithGraphql(<Products />);
    expect(screen.getByText('Loading...')).not.toBeNull();
    const table = await screen.findByRole('table');
    expect(table).not.toBeNull();
  });
});
