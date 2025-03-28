import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Oct', uv: 4000, percentage: 48 },
  { name: 'Nov', uv: 3000, percentage: 98 },
  { name: 'Dec', uv: 2000, percentage: 90 },
  { name: 'Jan', uv: 2780, percentage: 50 },
  { name: 'Feb', uv: 1890, percentage: 100 },
  { name: 'Mar', uv: 2390, percentage: 95 },
];

const ClientsAreaChart = () => {
    return (
            <div  className="w-full min-h-[300px] md:min-h-[400px]">
              <ResponsiveContainer width={400} height={200}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />  
                <Tooltip formatter={(value) => `${(value)}%`} />
                <Area type="linear" dataKey="percentage" stroke="#B1B1B1" fill="#053ADA" dot={{ r: 4 }}/>
              </AreaChart>
            </ResponsiveContainer>
            </div>
          );
      }
    

export default ClientsAreaChart