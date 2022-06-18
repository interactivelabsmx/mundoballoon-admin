import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Modal, { IModal } from '@components/UI/modal/Modal';

const comp = <div>Text</div>;

const getProps = (props?: Partial<IModal>): IModal => ({
  open: true,
  setOpen: vi.fn(),
  children: comp,
  ...props,
});

describe('Modal', () => {
  it('Renders modal', () => {
    render(<Modal {...getProps()} />);
    expect(screen.getByText('Text')).not.toBeNull();
  });
});
