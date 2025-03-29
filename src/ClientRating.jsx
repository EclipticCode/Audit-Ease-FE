import React, { useEffect, useState } from 'react'
import { apiUrl } from './Pages/constants'
import axios from 'axios'

const ClientRating = () => {

const [clientsData , setClientsData] = useState([])

useEffect(()=> {
const fetchClientsData = async () => {
    try{
        const response = await axios.get(`${apiUrl}/clientsratings`);
        setClientsData(response.data)
    } catch (error) {
        console.error("Error while fetching the data", error);
      }
}
fetchClientsData()
} , [])

  return (
    <div>
        <div className='bg-soft-secondary m-8 rounded-xl drop-shadow-lg font-roboto'>
            <div className='text-dark-primary font-semibold p-4'>Client Rating</div>
            <div className='overflow-x-auto'>
                <table className='w-full border-collapse pt-2'>
                    <thead className='bg-soft-primary'>
                        <tr>
                            <th className="px-4 py-2 text-center">No.</th>
                            <th className="px-4 py-2 text-center">Name</th>
                            <th className="px-4 py-2 text-center">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsData.map(eachData => (
                            <tr key={eachData._id} className='border-b-3 border-bg-primary'>
                                <td className='px-4 py-4 text-center'>{eachData.sNo}</td>
                                <td className='px-4 py-4 text-center'>{eachData.name}</td>
                                <td className='px-4 text-center'>{eachData.rating}<span><i className="fa-solid fa-star text-yellow-400 pl-2"></i></span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
  )
}

export default ClientRating