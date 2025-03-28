import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Sat', uv: 4000, pv: 2400 },
    { name: 'Sun', uv: 3000, pv: 1398 },
    { name: 'Mon', uv: 2700, pv: 1500 },  
    { name: 'Tue', uv: 2780, pv: 3908 },
    { name: 'Wed', uv: 2000, pv: 2500 },  
    { name: 'Thu', uv: 2390, pv: 3800 },
    { name: 'Fri', uv: 3490, pv: 4300 },
  ];

const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;
  
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value.split(' ')[1]}
        </text>
      </g>
    );
  };


const WeeklyActivity = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto p-3 bg-white rounded-lg shadow-md h-[250px] flex flex-col">
        <div className="flex justify-between items-center text-deep-primary font-semibold p-2">
            <div>Weekly Activity</div>
        </div>
        <div className='flex justify-end text-sm text-light-secondary'>
            <div><span><i className="fa-solid fa-circle px-2 text-light-primary"></i></span>Revenue</div>
            <div className='pr-2'><span><i className="fa-solid fa-circle px-2 text-soft-primary"></i></span>Expense</div>
        </div>
        <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            barSize={10} 
            barCategoryGap="35%"  
            barGap={3}  
          >
          <XAxis dataKey="name" axisLine={false} tickLine={false} 
               />
          <YAxis  domain={['dataMin', 'dataMax']}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}  
              interval={0}  
              axisLine={false}  
              tickLine={false}  
              tick={{ fontSize: 12 }}
  />
          <Tooltip />
          <Bar dataKey="pv" fill="#053ADA" radius= {[10, 10, 10, 10]} />
        
          <Bar dataKey="uv" fill="#B2C4FB" radius= {[10, 10, 10, 10]}  />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default WeeklyActivity