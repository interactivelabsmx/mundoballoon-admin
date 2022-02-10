import { render, screen } from '@testing-library/react';
import navigationOptions from '@layouts/navigationOptions';
import SideBar, { ISideBar } from '@components/Sidebar/SideBar';

const getProps = (props?: Partial<ISideBar>): ISideBar => ({
  sidebarOpen: false,
  setSidebarOpen: jest.fn(),
  navigationOptions,
  ...props,
});

describe('SideBar', () => {
  it('Renders SideBar', () => {
    render(<SideBar {...getProps()} />);
    expect(screen.getByText('Dashboard')).not.toBeNull();
  });
  it('Renders SideBar open', () => {
    render(<SideBar {...getProps({ sidebarOpen: true })} />);
    expect(screen.getByText('Close sidebar')).not.toBeNull();
  });
});
