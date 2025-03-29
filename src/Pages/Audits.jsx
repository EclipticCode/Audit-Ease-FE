import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from './constants'
import AuditCards from './AuditCards'
import Auditgraph from '../Auditgraph';


const Audits = () => {

  const [auditDatas , setAuditDatas] = useState([])
  
  useEffect(()=> {
  const fetchAuditDatas = async () => {
      try{
          const response = await axios.get(`${apiUrl}/auditdatas`);
          // console.log(response.data)
          setAuditDatas(response.data)
      } catch (error) {
          console.error("Error while fetching the data", error);
        }
  }
  fetchAuditDatas()
  } , [])
  
  return (
       <div >
        <div className='bg-soft-secondary m-8 rounded-lg drop-shadow-lg font-roboto '>
          <Auditgraph/>
        </div>
       <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2'>
          <div  className='bg-soft-secondary m-8 rounded-lg drop-shadow-lg lg:col-span-2'>
            <div className='flex flex-row justify-between'>
              <div className=''><div className='py-4 px-2 font-roboto '>
        <div className="text-deep-primary font-semibold">Total Audit</div>
        <div className='flex flex-row justify-between text-2xl font-bold my-4 space-x-12'>
            <div className='flex justify-center text-center w-full text-completed'>46</div>
            <div className='flex justify-center text-center w-full text-inprogress'>14</div>
            <div className='flex justify-center text-center w-full text-pending'>11</div>
        </div>
        <div className='flex flex-row justify-between text-sm font-medium text-light-secondary space-x-12'>
            <div className='flex justify-center text-center w-full'>Completed</div>
            <div className='flex justify-center text-center w-full'>In progress</div>
            <div className='flex justify-center text-center w-full'>Pending</div>
        </div>
    </div></div>
              <div className='flex flex-col m-8 py-3'>
                <div className='py-1'><span><i className="fa-solid fa-circle text-completed px-2"></i></span>Completed</div>
                <div className='py-1'><span><i className="fa-solid fa-circle text-inprogress px-2"></i></span>In progress</div>
                <div className='py-1'><span><i className="fa-solid fa-circle text-pending px-2"></i></span>Pending</div>
              </div>
            </div>
          </div>

          <div  className='bg-soft-secondary m-8 rounded-lg drop-shadow-lg'>
          <div className='py-4 px-2 font-roboto '>
        <div className="text-deep-primary font-semibold">Internal Audit</div>
        <div className='flex flex-row justify-between text-2xl font-bold my-4'>
            <div className='flex justify-center text-center w-full text-completed'>16</div>
            <div className='flex justify-center text-center w-full text-inprogress'>05</div>
            <div className='flex justify-center text-center w-full text-pending'>04</div>
        </div>
        <div className='flex flex-row justify-between text-sm font-medium text-light-secondary'>
            <div className='flex justify-center text-center w-full'>Completed</div>
            <div className='flex justify-center text-center w-full'>In progress</div>
            <div className='flex justify-center text-center w-full'>Pending</div>
        </div>
    </div>
          </div>
        </div>
         <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
        {auditDatas.map(({name, completed, inprogress, pending}) => (
          <div key={name} className='bg-soft-secondary m-8 rounded-lg drop-shadow-lg p-4'>
            <AuditCards title={name} completed={completed} inprogress={inprogress} pending={pending} />
          </div>
        ))}
      </div>
       </div>
  )
}

export default Audits