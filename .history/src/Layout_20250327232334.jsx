import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
        <div className='grid grid-cols-12 gap-4 m-8'>
      <Sidebar />
      <div className='col-span-9'>
        <Outlet /> {/* This will render the current route's component */}
      
    </div>
    </div>
  );
}

export default Layout;
