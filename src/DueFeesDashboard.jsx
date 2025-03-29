import React, { useEffect, useState } from 'react'
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
    <div className="bg-soft-secondary rounded-xl p-4 font-roboto">
    <div className="flex justify-between items-center">
      <div className='font-semibold text-sm text-dark-primary w-full'>Due Fess</div>
      <div>
        <div className='text-sm text-light-secondary flex items-center'>
          <span className='border-1 border-light-secondary px-2 py-0.5 text-soft-secondary rounded-sm bg-light-primary'>Company</span>
          <span className='border-1 border-light-secondary px-2 py-0.5 text-light-secondary rounded-sm drop-shadow-lg'>Individual</span>
          </div>
      </div>
    </div>
    <div className="w-full mt-6 text-sm text-gray-700 overflow-x-auto">
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr className="text-dark-secondary">
          <th className="px-4 py-2 text-left"></th>
          <th className="px-4 py-2 text-left"></th>
          <th className="px-4 py-2 text-left">Name of the Client</th>
          <th className="px-4 py-2 text-left">Name of the Company/Firm</th>
          <th className="px-4 py-2 text-left">Due Amount</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {dueFeesData.map((eachData, index) => (
          <tr key={eachData._id} className="">
            <td className="px-4 py-2">{eachData.sNo}</td>
            <td className="px-4 py-2"><img
          src={eachData.imageUrl}
          alt="Client"
          className="w-8 h-8 rounded-full object-cover border border-gray-300"
        /></td>
            <td className="px-4 py-2">{eachData.clientName}</td>
            <td className="px-4 py-2">{eachData.firmName}</td>
            <td className="px-4 py-2">{eachData.dueAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default DueFeesDashboard