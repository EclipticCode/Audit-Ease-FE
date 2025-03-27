import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
        <div className='grid grid-cols-12 gap-4'>
        <div>
        <Sidebar className="flex flex-col col-start-1 col-end-3" />
        </div>
      <div className='col-span-11 col-end-13 ml-4 bg-bg-primary'>
        <Outlet /> {/* This will render the current route's component */}
      </div>
    </div>
    </div>
  );
}

export default Layout;
