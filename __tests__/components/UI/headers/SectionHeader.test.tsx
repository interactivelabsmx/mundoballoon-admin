import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionHeader from '@components/UI/headers/SectionHeader';

describe('SectionHeader', () => {
  it('Renders the header', () => {
    render(<SectionHeader text="Header" />);
    expect(screen.getByText('Header')).not.toBeNull();
  });
});
