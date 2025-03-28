import React from 'react'
import { Link } from 'react-router-dom'

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
        <div className='flex flex-row justify-evenly'>
          <div className='bg-soft-secondary m-8 rounded-xl'>
            <div>client satisfaction level</div>
            <div>graph</div>
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