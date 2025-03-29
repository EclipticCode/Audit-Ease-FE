import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'On leave', value: 100 },
  { name: 'Available', value: 200 },
  { name: 'On Work', value: 700 },
];

const COLORS = ['#053ADA', '#F5F7FA', '#B2C4FB'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ArticlesPieChart = () => {
  return (
    <div>
      <div className='bg-soft-secondary m-8 rounded-xl drop-shadow-lg min-h-[280px] flex flex-col font-roboto'>
    <div className='text-sm font-semibold text-gray-950 font-roboto w-full flex items-center justify-center'>
        <ResponsiveContainer width={300} height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
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

export default ArticlesPieChart