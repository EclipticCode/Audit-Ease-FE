import React from 'react'
import { Link } from 'react-router-dom'
import AuditCards from './AuditCards'

const auditTypes = [
  'Internal Audit',
  'Financial Audit',
  'External Audit',
  'Compliance Audit',
  'IT Audit',
  'Forensic Audit',
  'Performance Audit'
];


const Audits = () => {
  return (
       <div >
        <div className='bg-soft-secondary m-8 rounded-xl'>
          <div>grpah</div>
          <div>graph value details</div>
        </div>
       <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md col-span-2'>total audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>internal audits</div>
        </div>
        {/* <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md'><AuditCards/></div>
          <div  className='bg-soft-secondary m-8 rounded-md'>external audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>compliance audits</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md'>IT audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>Forensic audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md'>Performance audits</div>
        </div> */}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {auditTypes.slice(1).map((audit, index) => (
          <div key={index} className='bg-soft-secondary m-8 rounded-md p-4'>
            <AuditCards title={audit} />
          </div>
        ))}
      </div>
       </div>
  )
}

export default Audits