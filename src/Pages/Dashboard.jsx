import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from './constants'
import Card from '../../Card'
import UpcomingEventsDashboard from '../UpcomingEventsDashboard'
import DueFeesDashboard from '../DueFeesDashboard'

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
          <div  className='bg-soft-secondary m-8 rounded-md col-span-2 drop-shadow-lg'>
            <div>Weekly Activity</div>
            <div>grapg</div>
          </div>
          <div  className='bg-soft-secondary m-8 rounded-md drop-shadow-lg'>
            <div>Expense Statistics</div>
            <div>Pie Chart</div>
          </div>
        </div>

        <div className='grid grid-cols-3'>
          <div  className='bg-soft-secondary m-6 rounded-md col-span-2 drop-shadow-lg'>
            <div><DueFeesDashboard/></div>
          </div>
          <div  className='bg-soft-secondary m-6 rounded-md drop-shadow-lg'>
            <div><UpcomingEventsDashboard/></div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard