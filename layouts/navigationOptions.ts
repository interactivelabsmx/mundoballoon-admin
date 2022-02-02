import {
  HomeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { INavigationOption } from '@components/Sidebar/SideBarOptions';

const navigationOptions: INavigationOption[] = [
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

export default navigationOptions;
