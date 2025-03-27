import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-row m-8'>
      <div>
        <div className='flex flex-col mt-6 text-light-secondary justify-start'>
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
      <div className='mt-6'>Dashboard</div>
    </div>
  )
}

export default Dashboard