import React from 'react'

const Card = ({title , value , percentage}) => {
  return (
    <div className='m-4'>
        <div className='font-semibold text-deep-primary'><h2>{title}</h2></div>
        <div className='flex flex-row justify-between'>
            <div className='text-2xl font-bold text-light-primary mt-2'>{value}</div>
            <div className='text-sm font-regular mt-4'>{percentage}</div>
        </div>
    </div>
  )
}

export default Card