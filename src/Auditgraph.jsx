import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Oct',
      InternalAudit: 34,
      FinancialAudit: 12,
      ExternalAudit: 23,
      ComplianceAudit: 10,
      ITAudit: 25,
      ForensicAudit: 35,
      PerformanceAudit: 20,
    },
    {
      name: 'Nov',
      InternalAudit: 13,
      FinancialAudit: 21,
      ExternalAudit: 22,
      ComplianceAudit: 34,
      ITAudit: 22,
      ForensicAudit: 35,
      PerformanceAudit: 12,
    },
    {
      name: 'Dec',
      InternalAudit: 25,
      FinancialAudit: 33,
      ExternalAudit: 14,
      ComplianceAudit: 22,
      ITAudit: 10,
      ForensicAudit: 16,
      PerformanceAudit: 33,
    },
    {
      name: 'Jan',
      InternalAudit: 26,
      FinancialAudit: 20,
      ExternalAudit: 15,
      ComplianceAudit: 23,
      ITAudit: 35,
      ForensicAudit: 17,
      PerformanceAudit: 14,
    },
    {
      name: 'Feb',
      InternalAudit: 35,
      FinancialAudit: 15,
      ExternalAudit: 26,
      ComplianceAudit: 14,
      ITAudit: 36,
      ForensicAudit: 18,
      PerformanceAudit: 25,
    },
    {
      name: 'Mar',
      InternalAudit: 18,
      FinancialAudit: 26,
      ExternalAudit: 37,
      ComplianceAudit: 15,
      ITAudit: 27,
      ForensicAudit: 19,
      PerformanceAudit: 16,
    },
];

  

const Auditgraph = () => {
  return (
    <div className='py-4 flex items-center justify-center text-sm w-full max-w-5xl mx-auto'>
        <ResponsiveContainer  width="100%" height="100%" minHeight={300}>
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
          barSize={10}
        >
         
          <XAxis dataKey="name" />
          <YAxis domain={[0, 40]} ticks={[0, 10, 20, 30, 40]}/>
          <Tooltip />
          <Legend iconType="circle" />
          <Bar dataKey="FinancialAudit" fill="#B2C4FB" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="InternalAudit" fill="#053ADA" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="ExternalAudit" fill="#032691" activeBar={<Rectangle fill="gold" stroke="green" />} />
          <Bar dataKey="ComplianceAudit" fill="#021655" activeBar={<Rectangle fill="gold" stroke="green" />} />
          <Bar dataKey="ITAudit" fill="#B2C4FB" activeBar={<Rectangle fill="gold" stroke="green" />} />
          <Bar dataKey="ForensicAudit" fill="#E6ECFE" activeBar={<Rectangle fill="gold" stroke="green" />} />
          <Bar dataKey="PerformanceAudit" fill="#053ADA" activeBar={<Rectangle fill="gold" stroke="green" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Auditgraph