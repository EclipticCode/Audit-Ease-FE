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
        <div className='flex flex-col mt-6'>
            <div className='mb-6'><span><i className="fa-solid fa-house mr-4"></i></span>Dashboard</div>
            <div className='mb-6'><span><i className="fa-solid fa-calculator mr-4"></i></span>Audits</div>
            <div className='mb-6'><span><i className="fa-solid fa-user mr-4"></i></span>Clients</div>
            <div className='mb-6'><span><i className="fa-solid fa-users mr-4"></i></span>Articles</div>
            <div className='mb-6'><span><i className="fa-solid fa-address-book mr-4"></i></span>Contacts</div>
            <div className='mb-6'><span><i className="fa-solid fa-gear mr-4"></i></span>Setting</div>
            <div className='mb-6'><span><i class="bi bi-box-arrow-right"></i></span>Logout</div>
        </div>
    </div>
  )
}

export default NavandSideBar