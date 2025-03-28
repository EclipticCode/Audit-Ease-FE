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
    <div className='m-4 sm:m-6 md:m-8'>
        <div className='flex flex-wrap items-center justify-between'>
            <div className='flex items-center flex-wrap'>
            <span><i className="bi bi-check-circle pr-2"></i></span>
            <div className='font-bold text-base sm:text-lg text-dark-primary'>Audit Ease.</div>
            <div className='ml-16 font-bold text-lg text-dark-primary'>{pageTitles[location.pathname] || 'Dashboard'}</div>
            </div>
            <div className='flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0'>
            <div className="bg-gray-200 flex items-center rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 w-auto"> 
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