import React from 'react';
import UserDropdown from '../../components/Dropdowns/UserDropdown';

const AdminNavbar = (): JSX.Element => (
  <nav className="w-full bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
    <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
      {/* Brand */}
      <span className="text-white text-sm uppercase hidden lg:inline-block font-semibold"></span>
      {/* User */}
      <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
        <UserDropdown />
      </ul>
    </div>
  </nav>
);

export default AdminNavbar;
