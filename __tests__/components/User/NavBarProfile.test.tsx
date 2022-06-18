import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavBarProfile from '@components/User/NavBarProfile';

describe('NavBarProfile', () => {
  it('Renders the NavBarProfile, ', () => {
    render(<NavBarProfile />);
    expect(screen.getByText('View profile')).not.toBeNull();
  });
});
