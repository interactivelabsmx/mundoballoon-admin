import { render, screen } from '@testing-library/react';
import Modal, { IModal } from '@components/UI/modal/Modal';

const comp = <div>Text</div>;

const getProps = (props?: Partial<IModal>): IModal => ({
  open: true,
  setOpen: jest.fn(),
  children: comp,
  ...props,
});

describe('Modal', () => {
  it('Renders modal', () => {
    render(<Modal {...getProps()} />);
    expect(screen.getByText('Text')).not.toBeNull();
  });
});
