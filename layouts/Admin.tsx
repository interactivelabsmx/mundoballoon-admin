import React from 'react';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import FooterAdmin from '../components/Footers/FooterAdmin';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps): JSX.Element => (
  <>
    <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      <div className="px-4 md:px-10 mx-auto w-full">
        {children}
        <FooterAdmin />
      </div>
    </div>
  </>
);

export default AdminLayout;
