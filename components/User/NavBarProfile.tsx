import { LogoutIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useAuth } from '../../containers/AuthProvider';
import SecundaryButton from '../UI/buttons/SecundaryButton';

const NavBarProfile = () => {
  const { logout } = useAuth();
  return (
    <div className="flex-shrink-0 flex bg-gray-700 p-4 justify-around">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <Image
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile Photo"
              height={40}
              width={40}
            />
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-white">Tom Cook</p>
            <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
              View profile
            </p>
          </div>
        </div>
      </a>
      <div>
        <SecundaryButton onClick={logout}>
          <span className="sr-only">Log out</span>
          <LogoutIcon height={24} />
        </SecundaryButton>
      </div>
    </div>
  );
};

export default NavBarProfile;
