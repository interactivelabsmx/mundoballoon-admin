import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';

describe('SimpleTextAlert', () => {
  it('Renders an error alert', () => {
    const onDismissAlert = jest.fn();
    render(
      <SimpleTextAlert
        text="Simple Error"
        type={SimpleTextAlertType.ERROR}
        onDismissAlert={onDismissAlert}
      />
    );
    expect(screen.getByText('Simple Error')).not.toBeNull();
    userEvent.click(screen.getByText('Dismiss'));
    expect(onDismissAlert).toHaveBeenCalledTimes(1);
  });
  it('Renders a Warning alert', () => {
    render(
      <SimpleTextAlert
        text="Simple Warning"
        type={SimpleTextAlertType.WARNING}
      />
    );
    expect(screen.getByText('Simple Warning')).not.toBeNull();
  });
  it('Renders a Success alert', () => {
    render(
      <SimpleTextAlert
        text="Simple Success"
        type={SimpleTextAlertType.SUCCESS}
      />
    );
    expect(screen.getByText('Simple Success')).not.toBeNull();
  });
});
