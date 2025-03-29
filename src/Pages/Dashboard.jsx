import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl , cardData} from "./constants";
import UpcomingEventsDashboard from "../UpcomingEventsDashboard";
import DueFeesDashboard from "../DueFeesDashboard";
import WeeklyActivity from "../WeeklyActivity";
import ExpenseStatistics from "../ExpenseStatistics";


const Dashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // for upcomingEvents
  useEffect(() => {
    const fetchUpcomingEvents = () => {
      try {
        const response = axios.get(`${apiUrl}/getUpcomingEvents`);
        //  console.log("response from DB:" , response.data);
        setUpcomingEvents(response.data);
      } catch (error) {
        console.error("Error fetching events data", error);
      }
    };
    fetchUpcomingEvents();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8 font-robto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-soft-secondary p-4 sm:p-6 rounded-lg drop-shadow-lg"
          >
            <div className="text-deep-primary font-semibold">{card.title}</div>
            <div className="flex flex-row justify-between">
              <div className="text-xl sm:text-2xl font-bold text-light-primary">
                {card.value}
              </div>
              {card.percentage > 0 ? (
                <div className="text-sm font-regular mt-4 text-green-700">
                  {card.percentage}%
                </div>
              ) : (
                <div className="text-sm font-regular mt-4 text-red-700">
                  {card.percentage}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-soft-secondary m-8 rounded-lg lg:col-span-2 drop-shadow-lg">
          <WeeklyActivity />
        </div>
        <div className="bg-soft-secondary m-8 rounded-lg drop-shadow-lg">
          <ExpenseStatistics />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
        <div className="bg-soft-secondary m-6 rounded-lg drop-shadow-lg">
          <div>
            <DueFeesDashboard />
          </div>
        </div>
        <div className="bg-soft-secondary m-6 rounded-lg drop-shadow-lg">
          <div>
            <UpcomingEventsDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
