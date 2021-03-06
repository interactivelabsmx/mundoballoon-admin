import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Users from '@pages/admin/users';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Users', () => {
  it('should render Users', async () => {
    await renderWithGraphql(<Users />);
    expect(screen.getByText('Users Page')).not.toBeNull();
  });
});
