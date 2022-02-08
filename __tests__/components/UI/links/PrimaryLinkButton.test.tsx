import { render, screen } from '@testing-library/react';
import PrimaryLinkButton from '@components/UI/links/PrimaryLinkButton';

describe('PrimaryLinkButton', () => {
  it('Renders the anchor, ', () => {
    render(<PrimaryLinkButton href="/link">Link</PrimaryLinkButton>);
    expect(screen.getByText('Link')).not.toBeNull();
  });
});
