import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PrimaryLinkButton from '@components/UI/links/PrimaryLinkButton';

describe('PrimaryLinkButton', () => {
  it('Renders the Link, ', () => {
    render(<PrimaryLinkButton href="/link">Link</PrimaryLinkButton>);
    expect(screen.getByText('Link')).not.toBeNull();
  });
});
