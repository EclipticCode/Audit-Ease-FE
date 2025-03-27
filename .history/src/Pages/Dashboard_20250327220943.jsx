import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div><div className='flex flex-col mt-6 text-light-secondary'>
            <div className='mb-6'>
            <button>
            <span><i className="fa-solid fa-house mr-4 text-lg"></i></span><span className='font-semibold text-sm'>
                <Link to={`/`}>Dashboard</Link>
                </span></button>
            </div>
            <div className='mb-6'><span><i className="fa-solid fa-calculator mr-6 text-lg"></i></span><span className='font-semibold text-sm'>Audits</span></div>
            <div className='mb-6'><span><i className="fa-solid fa-user mr-5.5 text-lg"></i></span><span className='font-semibold text-sm'>Clients</span></div>
            <div className='mb-6'><span><i className="fa-solid fa-users mr-4.5 text-lg"></i></span><span className='font-semibold text-sm'>Articles</span></div>
            <div className='mb-6'><span><i className="fa-solid fa-address-book mr-5.5 text-lg"></i></span><span className='font-semibold text-sm'>Contacts</span></div>
            <div className='mb-6'><span><i className="fa-solid fa-gear mr-6 text-lg"></i></span><span className='font-semibold text-sm'>Settings</span></div>
            <div className='mb-6'><span><i className="bi bi-box-arrow-right mr-6 text-lg"></i></span><span className='font-semibold text-sm'>Logout</span></div>
        </div></div>
      <div>graphs</div>
    </div>
  )
}

export default Dashboard