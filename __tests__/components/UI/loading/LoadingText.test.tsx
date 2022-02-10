import { render, screen } from '@testing-library/react';
import LoadingText from '@components/UI/loading/LoadingText';

describe('LoadingText', () => {
  it('Renders the loading, ', () => {
    render(<LoadingText />);
    expect(screen.getByText('Loading...')).not.toBeNull();
  });
  it('Renders the loading, ', () => {
    render(<LoadingText text="Link" />);
    expect(screen.getByText('Link')).not.toBeNull();
  });
});
