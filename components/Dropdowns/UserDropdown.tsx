import React, { useCallback, useState, useRef } from 'react';
import { createPopper } from '@popperjs/core';
import { useAuthUser } from 'next-firebase-auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UserDropdown = (): JSX.Element => {
  const router = useRouter();
  const AuthUser = useAuthUser();
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const handleSignOut = useCallback(
    (e) => {
      e.preventDefault();
      AuthUser.signOut();
      router.push('/');
    },
    [AuthUser, router]
  );
  return (
    <>
      <button
        className="text-blueGray-500 block"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link href="/profile">
          <a
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
            }
            onClick={(e) => e.preventDefault()}
          >
            Profile
          </a>
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <button
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default UserDropdown;
