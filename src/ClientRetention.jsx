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
  ReferenceLine,
  ResponsiveContainer,
  
} from 'recharts';

const data = [
    { name: 'Oct', uv: 4, pv: -2 },
    { name: 'Nov', uv: -3, pv: 1 },
    { name: 'Dec', uv: -2, pv: -9 },
    { name: 'Jan', uv: 7, pv: 5 },
    { name: 'Feb', uv: -6, pv: 3 },
    { name: 'Mar', uv: 2, pv: -4 },
  ];
  

const getColor = (value) => (value >= 0 ? "#032691" : "#B2C4FB");

const ClientRetention = () => {
  return (
    <div>
        <div className='flex flex-row justify-evenly p-4'>
              <div className='text-dark-primary font-semibold'>Client Retention</div>
              <div><span><i className="fa-solid fa-square text-dark-primary pr-4"></i></span>Lost Clients</div>
              <div><span><i className="fa-solid fa-square text-soft-primary pr-4"></i></span>New Clients</div>
              <div><span className='text-light-secondary pr-4'>- - -</span>Average Retention</div>
            </div>
            <div className="flex-grow w-full h-[270px]">
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="#ccc" horizontal={true} vertical={false}/>
          <XAxis dataKey="name"/>
          <YAxis domain={[-10, 10]} ticks={[10, 5, 0, -5, -10]}/>
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" stackId="a" barSize={50}>
              {data.map((entry, index) => (
                <Cell key={`cell-pv-${index}`} fill={getColor(entry.pv)} />
              ))}
            </Bar>

            <Bar dataKey="uv" stackId="a" barSize={50}>
              {data.map((entry, index) => (
                <Cell key={`cell-uv-${index}`} fill={getColor(entry.uv)} />
              ))}
            </Bar>
        </BarChart>
      </ResponsiveContainer>
            </div>
    </div>
  )
}

export default ClientRetention