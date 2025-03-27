import React from 'react'

const NavandSideBar = () => {
  return (
    <div className='m-8'>
        <div className='flex flex-row justify-between'>
            <div className='flex'>
            <div>Audit Ease</div>
            <div className='ml-16'>Dynamic content</div>
            </div>
            <div className='flex'>
            <div className="bg-gray-200 flex items-center justify-center rounded-full text-xs pl-3 pr-8 py-4 w-auto h-4 text-soft-primary"> 
              <span><i className="bi bi-search pr-4"></i></span> <span>Search for something</span>
            </div>
            <div className="bg-gray-200 flex items-center justify-center rounded-full text-xs  p-4 w-auto h-4 text-soft-primary">settings</div>
            <div>bell icon</div>
            <div>profile</div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div>Dashboard</div>
            <div>Audits</div>
            <div>Clients</div>
            <div>Articles</div>
            <div>Contacts</div>
            <div>Setting</div>
            <div>Logout</div>
        </div>
    </div>
  )
}

export default NavandSideBar