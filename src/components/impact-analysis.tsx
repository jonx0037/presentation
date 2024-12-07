import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  before: number;
  after: number;
  label: string;
}

const ImpactChart: React.FC = () => {
  const data: DataPoint[] = [
    {
      name: 'Moderation Staff',
      before: 100,
      after: 29,
      label: '71% reduction'
    },
    {
      name: 'Issue Reports',
      before: 100,
      after: 154,
      label: '54% increase'
    },
    {
      name: 'Appeal Success',
      before: 23,
      after: 12,
      label: '48% decrease'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = data.find(d => d.name === label);
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-slate-200">
          <p className="font-medium text-slate-900 mb-2">{label}</p>
          <p className="text-indigo-600">Pre-Musk: {payload[0].value}</p>
          <p className="text-slate-600">Post-Musk: {payload[1].value}</p>
          <p className="text-sm text-slate-500 mt-2">{dataPoint?.label}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="slide-container flex items-center justify-center">
      <div className="slide-content max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Platform Governance Impact Analysis
        </h2>
        
        <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">
          Comparative analysis of key governance metrics before and after the platform transition,
          showing significant changes in moderation approach and effectiveness.
        </p>

        <div className="card p-6 mb-8">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#475569' }}
                axisLine={{ stroke: '#CBD5E1' }}
              />
              <YAxis 
                tick={{ fill: '#475569' }}
                axisLine={{ stroke: '#CBD5E1' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '20px',
                  fontFamily: 'system-ui'
                }}
              />
              <Bar 
                dataKey="before" 
                name="Pre-Musk Era" 
                fill="#4F46E5"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="after" 
                name="Post-Musk Era" 
                fill="#94A3B8"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key Findings */}
        <div className="grid grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="card hover:shadow-lg transition-all duration-300">
              <h3 className="font-medium text-slate-900 mb-2">{item.name}</h3>
              <p className="text-3xl font-bold mb-2">
                {item.label.split(' ')[0]}
              </p>
              <p className="text-sm text-slate-600">
                {item.label.split(' ')[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Analysis Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
          <p className="text-center text-indigo-900 font-medium">
            The data reveals a clear shift in platform governance, marked by reduced human oversight
            and increased reliance on automated systems, leading to significant changes in moderation outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactChart;
