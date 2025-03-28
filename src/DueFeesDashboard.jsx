import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from './Pages/constants'

const DueFeesDashboard = () => {

const [dueFeesData , setDueFeesData] = useState([])

useEffect(() => {
    const fetchData = async () => {
    try{
        const response = await axios.get(`${apiUrl}/duesfeesdashboards`);
        // console.log("response from DB:", response.data);
        setDueFeesData(response.data)
    }catch (error) {
      console.error("Error while fetching the data", error);
    }
    };
    fetchData()
},[])

  return (
    <div className='bg-soft-secondary m-8 rounded-xl'>
    <div className='flex flex-row space-x-12'>
      <div className='font-semibold text-sm text-dark-primary w-full'>Due Fess</div>
      <div>
        <div className='text-sm text-light-secondary'>
          <span className='border-1 border-light-secondary px-2 py-0.5 text-soft-secondary rounded-sm bg-light-primary'>Company</span>
          <span className='border-1 border-light-secondary px-2 py-0.5 text-light-secondary rounded-sm drop-shadow-lg'>Individual</span>
          </div>
      </div>
    </div>
    <div className='w-full mt-6 mb-16 text-sm'>
      <table className='table-fixed'>
        <thead>
          <tr className=' text-dark-secondary'>
          <th  className='px-8'>
            </th>
            <th  className='px-8 py-4'>
            </th>
            <th  className='px-8 py-4'>
              Name of Client
            </th>
            <th  className='px-8 py-4'>
              Name of Company/Firm
            </th>
            <th  className='px-8 py-4 flex justify-start'>
              Due amount
            </th>
            </tr>
        </thead>
        <tbody className='pt-4 text-semibold w-full'>
        {
            dueFeesData.map(eachData => (
              <tr key={eachData._id} className=''>
                <td  className='px-8 py-2'>{eachData.sNo}</td>
                <td  className='px-8 py-2'></td>
                <td  className='px-8 py-2'>{eachData.clientName}</td>
                <td  className='px-8 py-2'>{eachData.firmName}</td>
                <td  className='px-8 py-2 flex justify-start'>{eachData.dueAmount}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default DueFeesDashboard