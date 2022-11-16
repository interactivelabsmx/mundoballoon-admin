import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import navigationOptions from '@layouts/navigationOptions';
import SideBar, { ISideBar } from '@components/Sidebar/SideBar';

const getProps = (props?: Partial<ISideBar>): ISideBar => ({
  sidebarOpen: false,
  setSidebarOpen: vi.fn(),
  navigationOptions,
  ...props,
});

describe('SideBar', () => {
  it('Renders SideBar', () => {
    render(<SideBar {...getProps()} />);

    expect(screen.getByText('Dashboard')).not.toBeNull();
  });
});
