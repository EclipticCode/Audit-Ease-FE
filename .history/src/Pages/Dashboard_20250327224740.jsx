import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 gap-4 m-8'>
      <div>
        <div className='flex flex-col col-start-1 col-end-3 text-light-secondary mt-6'>
            <div className='mb-6'>
            <button>
            <span><i className="fa-solid fa-house mr-4 text-lg"></i></span><span className='font-semibold text-sm'>
                <Link to={`/`}>Dashboard</Link>
                </span></button>
            </div>
            <div className='mb-6'><span><i className="fa-solid fa-calculator mr-6 text-lg"></i></span><span className='font-semibold text-sm'><Link to={`/audits`}>Audits</Link></span></div>
            <div className='mb-6'><span><i className="fa-solid fa-user mr-5.5 text-lg"></i></span><span className='font-semibold text-sm'>Clients</span></div>
            <div className='mb-6'><span><i className="fa-solid fa-users mr-4.5 text-lg"></i></span><span className='font-semibold text-sm'>Articles</span></div>
            <div className='mb-6'><span><i className="fa-solid fa-address-book mr-5.5 text-lg"></i></span><span className='font-semibold text-sm'>Contacts</span></div>
            <div className='mb-6'><span><i className="fa-solid fa-gear mr-6 text-lg"></i></span><span className='font-semibold text-sm'>Settings</span></div>
            <div className='mb-6'><span><i className="bi bi-box-arrow-right mr-6 text-lg"></i></span><span className='font-semibold text-sm'>Logout</span></div>
        </div>
        </div>
      <div className='col-span-11 col-end-13 ml-4 bg-bg-primary'>Dashboard</div>
    </div>
  )
}

export default Dashboard