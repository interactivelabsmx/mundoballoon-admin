import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { INavigationOption } from '../../layouts/AdminLayout';

interface ISideBarOptions {
  navigationOptions: INavigationOption[];
}

const SideBarOptions = ({ navigationOptions }: ISideBarOptions) => {
  const router = useRouter();
  return (
    <nav className="mt-5 px-2 space-y-1">
      {navigationOptions.map((item) => (
        <Link href={item.href} key={item.name}>
          <a
            className={classNames(
              router.pathname.indexOf(item.href) != -1
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
          >
            <item.icon
              className={classNames(
                router.pathname.indexOf(item.href) != -1
                  ? 'text-gray-300'
                  : 'text-gray-400 group-hover:text-gray-300',
                'mr-4 flex-shrink-0 h-6 w-6'
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};
export default SideBarOptions;