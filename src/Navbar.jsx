import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation()
  const pageTitles = {
    '/': 'Overview',
    '/audits': 'Audits',
    '/clients': 'Clients',
    '/articles': 'Articles',
    '/contacts': 'Contacts',
  };
  return (
    <div className='m-8'>
        <div className='flex flex-row justify-between'>
            <div className='flex'>
            <span><i className="bi bi-check-circle pr-2"></i></span>
            <div className='font-bold text-lg text-dark-primary'>Audit Ease.</div>
            <div className='ml-16 font-bold text-lg text-dark-primary'>{pageTitles[location.pathname] || 'Dashboard'}</div>
            </div>
            <div className='flex space-x-4'>
            <div className="bg-gray-200 flex items-center justify-center rounded-full text-xs pl-3 pr-8 py-4 w-auto h-4 text-soft-primary"> 
              <span><i className="bi bi-search pr-4"></i></span> <span>Search for something</span>
            </div>
            <div className="bg-bg-navbar flex items-center justify-center rounded-full text-lg p-4 w-8 h-4  text-soft-primary"><i className="bi bi-gear"></i></div>
            <div className="bg-bg-navbar flex items-center justify-center rounded-full text-md p-4 w-8 h-4 text-red-400"><i className="bi bi-bell"></i></div>
            <div className="bg-bg-navbar flex items-center justify-center rounded-full text-xs p-4 w-auto h-4 text-soft-primary">profile</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar