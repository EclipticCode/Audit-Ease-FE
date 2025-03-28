import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from './constants'
import Card from '../../Card'

const cardData = [
  { title: "Total Audits", value: "150" , percentage:"1.24"},
  { title: "Internal Audits", value: "75" , percentage:"-0.24" },
  { title: "Financial Audits", value: "45", percentage:"0.91" },
  { title: "External Audits", value: "30", percentage:"1.02" },
];


const Dashboard = () => {

const [upcomingEvents , setUpcomingEvents] = useState([])

// for upcomingEvents
useEffect(() => {
  const fetchUpcomingEvents = () => {
    try{
       const response = axios.get(`${apiUrl}/getUpcomingEvents`);
      //  console.log("response from DB:" , response.data);
       setUpcomingEvents(response.data)
    } catch(error){
      console.error("Error fetching events data" , error)
    }
  };
  fetchUpcomingEvents();
} , [])

  return (
        <div>
         <div className="grid grid-cols-4 gap-8 p-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-soft-secondary p-6 rounded-lg drop-shadow-lg"
        >
          <div className="text-deep-primary font-semibold">{card.title}</div>
          <div className='flex flex-row justify-between'>
          <div className='text-2xl font-bold text-light-primary mt-2'>{card.value}</div>
          {card.percentage > 0 ? (<div className="text-sm font-regular mt-4 text-green-700">{card.percentage}%</div>) : (<div className="text-sm font-regular mt-4 text-red-700">{card.percentage}%</div>)}
          </div>
        </div>
      ))}
    </div>
        <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md col-span-2 drop-shadow-lg'>total audits</div>
          <div  className='bg-soft-secondary m-8 rounded-md drop-shadow-lg'>
            <div>Expense Statistics</div>
            <div>Pie Chart</div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <div  className='bg-soft-secondary m-8 rounded-md col-span-2 drop-shadow-lg'>total audits</div>
          
          <div  className='bg-soft-secondary m-8 rounded-md drop-shadow-lg '>
            <div className='m-4'>Upcoming Events</div>
            <div className='w-full mt-10 mb-16 text-sm'>

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
              {/* {
                upcomingEvents.map(eachEvent => (
                  <tr key={eachEvent._id} className='border-b-3 border-bg-primary'>
                    <td  className='px-8 py-4'>{eachEvent.no}</td>
                    <td  className='px-8 py-4'>{eachEvent.events}</td>
                    <td  className='px-8 py-4'>{eachEvent.companyName}</td>
                    <td  className='px-8 '>{eachEvent.date}</td>
                    
                  </tr>
                ))
              } */}
            </tbody>
          </table>
        </div>
      </div>
          </div>
        </div>
        
       
  )
}

export default Dashboard