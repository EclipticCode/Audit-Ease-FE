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
    <div><div className="bg-soft-secondary rounded-xl p-2 min-h-[400px]">
    <div className="m-2 text-sm font-semibold text-deep-primary">Upcoming Events</div>

      <div className="w-full text-sm overflow-x-auto">
      <table className="table-auto w-full border-collapse">
      <thead className="sticky top-0 bg-soft-secondary text-dark-secondary">
        <tr className='text-dark-secondary'>
        <th className="px-4 py-2 w-[10%] text-left">#</th>
              <th className="px-4 py-2 w-[60%] text-left">Events</th>
              <th className="px-4 py-2 w-[30%] text-left">Date</th>
          </tr>
      </thead>
      <tbody className='pt-8 text-semibold'>
        {
          eventsData.map(eachEvent => (
            <tr key={eachEvent._id} className='border-b-3 border-bg-primary'>
              <td  className='px-4 py-2'>{eachEvent.no}</td>
              <td  className='px-4 py-2'>{eachEvent.events}</td>
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