import { LogoutIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useAuth } from '../../containers/AuthProvider';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import AvatarDefault from '../UI/Icons/AvatarDefault';

const NavBarProfile = () => {
  const { logout, user } = useAuth();
  const name = (
    user?.displayName ||
    user?.email ||
    user?.phoneNumber ||
    ''
  ).slice(0, 13);
  return (
    <div className="flex-shrink-0 flex bg-gray p-4 justify-around">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            {user?.photoURL ? (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={user?.photoURL}
                alt="Profile Photo"
                height={40}
                width={40}
              />
            ) : (
              <AvatarDefault />
            )}
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-white truncate">{name}</p>
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
