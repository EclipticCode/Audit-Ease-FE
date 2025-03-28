import React from 'react'
import { Link } from 'react-router-dom'

const Articles = () => {
  return (
  
    <div>
    <div className='bg-soft-secondary m-8 rounded-xl'>
    <div className='sm:bock  md:flex flex-row justify-evenly'>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Client type: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Region: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Company name: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-md p-2 text-dark-primary rounded-sm my-8'><i className="bi bi-filter"></i></div>
          <div className='my-8 p-2 text-sm text-light-secondary text-bold'>2 items selected</div>
          <div className='border-0.5 drop-shadow-md bg-dark-primary text-sm p-2 text-soft-secondary rounded-md my-8'>+ ADD CLIENT</div>
        </div>
        <div>
        table
        </div>
    </div>
    <div className='flex flex-row justify-evenly'>
      <div className='bg-soft-secondary m-8 rounded-xl'>
        <div className='flex flex-row justify-evenly'>
          <div>available artucles</div>
          <div>date</div>
        </div>
        <div>table</div>
      </div>
      <div className='bg-soft-secondary m-8 rounded-xl'>pie chart</div>
    </div>
       </div>
   
 
  )
}

export default Articles