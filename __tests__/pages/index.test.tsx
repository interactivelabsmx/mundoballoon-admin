import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Index from '@pages/index';
import renderWithGraphql from '@lib/test/renderWithGraphql';

describe('Index', () => {
  it('should render index', async () => {
    await renderWithGraphql(<Index />);
    expect(screen.getByText('Sign in to your account')).not.toBeNull();
  });
});
