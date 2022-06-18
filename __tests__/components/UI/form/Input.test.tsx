import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Input from '@components/UI/form/Input';

describe('Input', () => {
  it('Renders the Input, and fires onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Input
        label="LastName"
        name="LastName"
        placeholder="Last Name"
        onChange={onChange}
      />
    );
    const input = screen.getByPlaceholderText('Last Name');
    expect(input).not.toBeNull();
    await user.type(input, 'test');
    expect(onChange).toBeCalledTimes(4);
  });
});
