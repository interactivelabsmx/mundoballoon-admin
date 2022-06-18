import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Settings from '@pages/admin/settings';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Settings', () => {
  it('should render Settings', async () => {
    await renderWithGraphql(<Settings />);
    expect(screen.getByText('Settings Page')).not.toBeNull();
  });
});
