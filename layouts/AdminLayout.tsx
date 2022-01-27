import {
  HomeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/solid';
import React, {
  useState,
  ReactNode,
  FunctionComponent,
  SVGProps,
  useCallback,
} from 'react';
import SideBar from '@components/Sidebar/SideBar';

interface IAdminLayout {
  children: ReactNode;
}

export interface INavigationOption {
  name: string;
  href: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  current: boolean;
}

const navigation: INavigationOption[] = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: HomeIcon,
    current: true,
  },
  {
    name: 'Products',
    href: '/admin/products',
    icon: ShoppingCartIcon,
    current: false,
  },
  { name: 'Users', href: '/admin/users', icon: UserGroupIcon, current: false },
];

const AdminLayout = ({ children }: IAdminLayout): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const onOpenSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);
  return (
    <div className="h-full">
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigationOptions={navigation}
      />
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={onOpenSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
