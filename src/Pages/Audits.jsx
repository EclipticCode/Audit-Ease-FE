import React from 'react'
import { Link } from 'react-router-dom'

const Audits = () => {
  return (
       <div >
        <div className='bg-soft-secondary m-8 rounded-xl'>
          <div>grpah</div>
          <div>graph value details</div>
        </div>
       
       {/* <div className='flex flex-row justify-evenly'> */}
       <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md col-span-2'>total audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>internal audits</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md'>financial audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>external audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>compliance audits</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md'>IT audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>Forensic audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>Performance audits</div>
        </div>
       </div>
      //  </div>
  
  )
}

export default Audits