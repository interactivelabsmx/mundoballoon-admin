import { screen } from '@testing-library/react';
import Index from '@pages/index';
import renderWithGraphql from '@lib/utils/renderWithGraphql';

// jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Index', () => {
  it('should render index', async () => {
    await renderWithGraphql(<Index />);
    expect(screen.getByText('Sign in to your account')).not.toBeNull();
  });
});
