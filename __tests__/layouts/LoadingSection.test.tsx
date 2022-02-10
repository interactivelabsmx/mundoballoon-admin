import { screen } from '@testing-library/react';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import LoadingSection from '@layouts/LoadingSection';

describe('LoadingSection', () => {
  it('should render LoadingSection with content', async () => {
    await renderWithGraphql(<LoadingSection />);
    expect(screen.getByText('Loading...')).not.toBeNull();
  });
});
