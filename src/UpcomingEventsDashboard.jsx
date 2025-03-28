import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from './Pages/constants'

const UpcomingEventsDashboard = () => {

const [eventsData , setEventsData] = useState([])

useEffect( ()=>{
    const fetchData = async () => {
    try{
        const response = await axios.get(`${apiUrl}/getUpcomingEvents`);
        // console.log("response from DB:", response.data);
        setEventsData(response.data)
    }catch (error) {
      console.error("Error while fetching the data", error);
    }
}
    fetchData()
},[])
  return (
    <div><div  className=''>
    <div className='m-4'>Upcoming Events</div>
      <div className=' mt-10 mb-16 text-sm'>

      <table className='table-fixed'>
      <thead>
        <tr className='text-dark-secondary'>
        <th  className='px-8'>
            
          </th>
          <th  className='px-8 py-4'>
            Events
          </th>
          <th  className='px-36'>
            Date
          </th>
          </tr>
      </thead>
      <tbody className='pt-10 text-semibold'>
        {
          eventsData.map(eachEvent => (
            <tr key={eachEvent._id} className='border-b-3 border-bg-primary'>
              <td  className='px-4 py-4'>{eachEvent.no}</td>
              <td  className='px-4 py-4'>{eachEvent.events}</td>
              <td  className='px-4 '>{eachEvent.date}</td>
              
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
</div></div>
  )
}

export default UpcomingEventsDashboard