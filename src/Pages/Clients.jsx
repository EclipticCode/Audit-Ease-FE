import React from 'react'
import { Link } from 'react-router-dom'
import AreaChart from '../../ClientsAreaChart'
import ClientsAreaChart from '../../ClientsAreaChart'

const Clients = () => {
  return (
    
       <div>
        <div className='bg-soft-secondary m-8 rounded-xl'>
            <div className='flex flex-row justify-evenly'>
              <div>Client Retention</div>
              <div>lost clients</div>
              <div>newclients</div>
              <div>avg Retention</div>
            </div>
            <div>
              graph
            </div>
        </div>
        <div className='grid grid-cols-[55%_45%] gap-4'>
          <div className='bg-soft-secondary m-8 rounded-xl h-60'>
            <div >client satisfaction level</div>
            <div><ClientsAreaChart/></div>
          </div>
          <div className='bg-soft-secondary m-8 rounded-xl'>
            <div>Client ratings</div>
            <div>Table</div>
          </div>
        </div>
       </div>
    
  )
}

export default Clients