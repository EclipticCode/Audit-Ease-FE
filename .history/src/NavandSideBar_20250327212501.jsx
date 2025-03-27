import React from 'react'

const NavandSideBar = () => {
  return (
    <div className='m-8'>
        <div className='flex flex-row justify-between'>
            <div className='flex'>
            <span><i className="bi bi-check-circle pr-2"></i></span>
            <div>Audit Ease.</div>
            <div className='ml-16'>Dynamic content</div>
            </div>
            <div className='flex space-x-4'>
            <div className="bg-gray-200 flex items-center justify-center rounded-full text-xs pl-3 pr-8 py-4 w-auto h-4 text-soft-primary"> 
              <span><i className="bi bi-search pr-4"></i></span> <span>Search for something</span>
            </div>
            <div className="bg-gray-200 flex items-center justify-center rounded-full text-lg p-4 w-8 h-4  text-soft-primary"><i className="bi bi-gear"></i></div>
            <div className="bg-gray-200 flex items-center justify-center rounded-full text-md p-4 w-8 h-4 text-red-400"><i className="bi bi-bell"></i></div>
            <div className="bg-gray-200 flex items-center justify-center rounded-full text-xs p-4 w-auto h-4 text-soft-primary">profile</div>
            </div>
        </div>
        <div className='flex flex-col my-4'>
            <div className='mb-6'>Dashboard</div>
            <div className='mb-6'>Audits</div>
            <div className='mb-6'>Clients</div>
            <div className='mb-6'>Articles</div>
            <div className='mb-6'>Contacts</div>
            <div className='mb-6'>Setting</div>
            <div className='mb-6'>Logout</div>
        </div>
    </div>
  )
}

export default NavandSideBar