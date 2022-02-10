import { screen } from '@testing-library/react';
import Orders from '@pages/admin/orders';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Orders', () => {
  it('should render Orders', async () => {
    await renderWithGraphql(<Orders />);
    expect(screen.getByText('Orders Page')).not.toBeNull();
  });
});
