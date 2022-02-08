import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';

describe('PrimaryButton', () => {
  it('Renders the button, and fires onClick', () => {
    const onClick = jest.fn();
    render(<PrimaryButton onClick={onClick}>Button</PrimaryButton>);
    const btn = screen.getByText('Button');
    expect(btn).not.toBeNull();
    userEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
