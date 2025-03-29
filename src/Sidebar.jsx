import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); 

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: 'fa-house' },
    { name: 'Audits', path: '/audits', icon: 'fa-calculator' },
    { name: 'Clients', path: '/clients', icon: 'fa-user' },
    { name: 'Articles', path: '/articles', icon: 'fa-users' },
    { name: 'Contacts', path: '/contacts', icon: 'fa-address-book' },
    { name: 'Settings', path: '/settings', icon: 'fa-gear' },
    { name: 'Logout', path: '/logout', icon: 'bi bi-box-arrow-right' },
  ];

  return (
    <div className='flex flex-col font-roboto'>
      <div className='text-light-secondary mt-6'>
        {menuItems.map((item) => (
          <div key={item.name} className='mb-6'>
            <Link 
              to={item.path}
              className={`flex items-center text-sm font-semibold ${
                location.pathname === item.path ? 'text-dark-primary' : 'text-light-secondary'
              }`}
            >
              <i className={`fa-solid ${item.icon} mr-4 text-lg`}></i>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
