import React, { useEffect, useState } from 'react'
import { apiUrl } from './Pages/constants'
import axios from 'axios'

const AvailableArticles = () => {

const [articlesData , setArticlesData] = useState([])

useEffect(()=> {
const fetchData = async () => {
    try{
        const response = await axios.get(`${apiUrl}/availablearticles`);
        setArticlesData(response.data)
    } catch (error) {
        console.error("Error while fetching the data", error);
      }
}
fetchData()
} , [])

  return (
    <div>
        <div className='bg-soft-secondary m-8 rounded-xl drop-shadow-lg min-h-[280px] font-roboto'>
            <div className='flex flex-row justify-between'>
            <div className='text-dark-primary font-semibold p-4'>Available Articles</div>
            <div>
            <div className='text-sm text-light-secondary p-4 mr-2'>
              <span className='pr-4'>Date </span>
              <span className='border-1 border-light-secondary px-16 text-light-secondary rounded-sm'></span></div>
          </div>
          </div>
            <div className='overflow-x-auto w-full'>
                <table className='w-full table-auto border-collapse'>
                    <thead className='bg-soft-primary text-sm'>
                        <tr>
                            <th className="px-2 py-2 text-center">No.</th>
                            <th className="px-2 py-2 text-center"></th>
                            <th className="px-2 py-2 text-center">Name</th>
                            <th className="px-2 py-2 text-center">E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articlesData.map(eachData => (
                            <tr key={eachData._id} className='border-b-3 border-bg-primary text-sm text-gray-700'>
                                <td className='px-2 py-2 text-center'>{eachData.sNo}</td>
                                <td className='px-2 py-2 text-center'><img
          src={eachData.imageUrl}
          alt="Client"
          className="w-6 h-6 rounded-full object-cover border border-gray-300"
        /></td>
                                <td className='px-2 py-2 text-center'>{eachData.name}</td>
                                <td className='px-2 text-center'>{eachData.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
  )
}

export default AvailableArticles