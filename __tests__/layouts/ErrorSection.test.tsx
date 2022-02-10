import { screen } from '@testing-library/react';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import ErrorSection from '@layouts/ErrorSection';

describe('ErrorSection', () => {
  it('should render ErrorSection with content', async () => {
    await renderWithGraphql(<ErrorSection />);
    expect(
      screen.getByText('Something went wrong, please try again latter')
    ).not.toBeNull();
  });
});
