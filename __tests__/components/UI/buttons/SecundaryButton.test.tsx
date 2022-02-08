import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';

describe('SecundaryButton', () => {
  it('Renders the button, and fires onClick', () => {
    const onClick = jest.fn();
    render(<SecundaryButton onClick={onClick}>Button</SecundaryButton>);
    const btn = screen.getByText('Button');
    expect(btn).not.toBeNull();
    userEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
