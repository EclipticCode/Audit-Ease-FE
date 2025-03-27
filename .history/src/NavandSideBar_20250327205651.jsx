import React from 'react'

const NavandSideBar = () => {
  return (
    <div className='m-8'>
        <div className='flex flex-row just'>
            <div className='flex flex-row'>
            <div>Audit Ease</div>
            <div>Dynamic content</div>
            </div>
            <div className='flex'>
            <div>Search for something</div>
            <div>settings</div>
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