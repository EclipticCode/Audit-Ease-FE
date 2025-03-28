import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
        <div>
         <div className='grid grid-cols-4 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md'>total audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>internal audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>financial audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>external audits</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md col-span-2'>total audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>
            <div>Expense Statistics</div>
            <div>Pie Chart</div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md col-span-2'>total audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>internal audits</div>
        </div>
        
       </div>
  )
}

export default Dashboard