import React from 'react'
import { Link } from 'react-router-dom'
import AreaChart from '../../ClientsAreaChart'
import ClientsAreaChart from '../../ClientsAreaChart'
import ClientRating from '../ClientRating'
import ClientRetention from '../ClientRetention'

const Clients = () => {
  return (
    
       <div>
        <div className='bg-soft-secondary m-8 rounded-xl'>
            <ClientRetention/>
        </div>
        <div className='grid grid-cols-[55%_45%] gap-4'>
          <div className=''>
            <ClientsAreaChart/>
          </div>
          <div className=''>
            <ClientRating/>
          </div>
        </div>
       </div>
    
  )
}

export default Clients