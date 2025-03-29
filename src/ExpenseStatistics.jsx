import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Office Expenses', value: 350 },
  { name: 'Software & Technology', value: 200 },
  { name: 'Personal Expenses', value: 300 },
  { name: 'Other', value: 150 },

];

const COLORS = ['#053ADA','#B2C4FB', '#F5F7FA', '#B2C4FB'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="10">
      <tspan x={x} dy="-5">{`${(percent * 100).toFixed(0)}%`}</tspan> 
      <tspan x={x} dy="12">{`${data[index].name}`}</tspan> 
    </text>
  );
};


const ExpenseStatistics = () => {
  return (
    <div className='p-2 font-roboto'>
        <div className="flex justify-between items-center text-deep-primary font-semibold">Expense Statistics</div>
        <div>
            <div className='text-xs font-semibold text-gray-950'>
                    <ResponsiveContainer width={400} height={200}>
                    <PieChart width={400} height={400}>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
        </div>
    </div>
  )
}

export default ExpenseStatistics