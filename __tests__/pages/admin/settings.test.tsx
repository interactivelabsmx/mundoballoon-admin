import { screen } from '@testing-library/react';
import Settings from '@pages/admin/settings';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Settings', () => {
  it('should render Settings', async () => {
    await renderWithGraphql(<Settings />);
    expect(screen.getByText('Settings Page')).not.toBeNull();
  });
});
