import { screen } from '@testing-library/react';
import FirebasePhoneForm from '@components/Auth/FirebasePhoneForm';
import renderWithGraphql from '../utils/renderWithGraphql';

it('should render the dog breed', async () => {
  renderWithGraphql(
    <FirebasePhoneForm
      setRequestError={jest.fn()}
      setConfirmationResult={jest.fn()}
      onCancel={jest.fn()}
    />,
    {
      mocks: {},
    }
  );

  await screen.findByText(/pug/i);
});
