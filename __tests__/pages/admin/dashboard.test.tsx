import { screen } from '@testing-library/react';
import Dashboard from '@pages/admin/dashboard';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Dashboard', () => {
  it('should render Dashboard', async () => {
    await renderWithGraphql(<Dashboard />);
    expect(screen.getByText('Dashboard Page')).not.toBeNull();
  });
});
