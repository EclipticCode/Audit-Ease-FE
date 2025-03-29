import React, { useEffect } from 'react'

const AuditCards = ({title , completed , inprogress , pending}) => {

  return (
    <div className='py-4 px-2 font-roboto '>
        <div className="text-deep-primary font-semibold">{title}</div>
        <div className='flex flex-row justify-between text-2xl font-bold my-4'>
            <div className='flex justify-center text-center w-full text-completed'>{completed}</div>
            <div className='flex justify-center text-center w-full text-inprogress'>{inprogress}</div>
            <div className='flex justify-center text-center w-full text-pending'>{pending}</div>
        </div>
        <div className='flex flex-row justify-between text-sm font-medium text-light-secondary'>
            <div className='flex justify-center text-center w-full'>Completed</div>
            <div className='flex justify-center text-center w-full'>In progress</div>
            <div className='flex justify-center text-center w-full'>Pending</div>
        </div>
    </div>
  )
}

export default AuditCards