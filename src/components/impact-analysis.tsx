import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import tensionImage from '@assets/images/tension-between-free-speech-absolutism-and-practical-moderation.png';

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
    <div className="slide-container relative h-screen pt-16 pb-20 px-4 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Platform Governance Impact Analysis
        </h2>
        
        <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">
          Comparative analysis of key governance metrics before and after the platform transition,
          showing significant changes in moderation approach and effectiveness.
        </p>

        {/* Added Image Section */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={tensionImage}
              alt="Tension Between Free Speech Absolutism and Practical Moderation"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm py-3 px-4">
              Visualizing the Balance Between Free Speech and Content Moderation
            </div>
          </div>
        </div>

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
              <h3 className="font-medium text-slate-900 mb-2">
                {item.name} 
                {item.name === 'Moderation Staff' && 
                  <sup className="citation-ref group relative cursor-pointer">
                    <span className="text-blue-600">[1]</span>
                    <span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-16 left-0 bg-white p-3 rounded shadow-lg text-sm w-64 z-50">
                      [1]Reuters. "Content Moderation Staff Reduction under Musk." Reuters, December 12, 2023.
                    </span>
                  </sup>
                }
              </h3>
              <p className="text-3xl font-bold mb-2">
                {item.label.split(' ')[0]}
              </p>
              <p className="text-sm text-slate-600">
                {item.label.split(' ')[1]}
                {(item.name === 'Issue Reports' || item.name === 'Appeal Success') && 
                  <sup className="citation-ref group relative cursor-pointer">
                    <span className="text-blue-600">[2]</span>
                    <span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-16 left-0 bg-white p-3 rounded shadow-lg text-sm w-64 z-50">
                      [2]Twitter. "Q4 2022 Transparency Report." Transparency Center, Twitter, December 31, 2022.
                    </span>
                  </sup>
                }
              </p>
            </div>
          ))}
        </div>

        {/* Analysis Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
          <p className="text-center text-indigo-900 font-medium text-sm pb-4">
            The data reveals a clear shift in platform governance, marked by reduced human oversight
            and increased reliance on automated systems, leading to significant changes in moderation outcomes.
            <sup className="citation-ref group relative cursor-pointer">
              <span className="text-blue-600">[3]</span>
              <span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-16 left-0 bg-white p-3 rounded shadow-lg text-sm w-64 z-50">
                [3]Wang, Rui, et al. "Empowered or Constrained in Platform Governance?" Social Media + Society, March 15, 2024.
              </span>
            </sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactChart;
