import React from 'react'

const AuditCards = ({title}) => {
  return (
    <div className='py-4 px-2'>
        <div className="text-deep-primary font-semibold">{title}</div>
        <div className='flex flex-row justify-between text-2xl font-bold my-4'>
            <div className='flex justify-center text-center w-full text-completed'>12</div>
            <div className='flex justify-center text-center w-full text-inprogress'>02</div>
            <div className='flex justify-center text-center w-full text-pending'>5</div>
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