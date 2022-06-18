import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';

describe('PrimaryButton', () => {
  it('Renders the button, and fires onClick', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<PrimaryButton onClick={onClick}>Button</PrimaryButton>);
    const btn = screen.getByText('Button');
    expect(btn).not.toBeNull();
    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
