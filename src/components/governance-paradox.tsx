import React from 'react';

interface ParadoxCardProps {
  title: string;
  promised: string[];
  reality: string[];
  citation: string;
}

const ParadoxCard: React.FC<ParadoxCardProps> = ({ title, promised, reality, citation }) => (
  <div className="card hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white relative group">
    <h3 className="text-2xl font-bold mb-6 text-indigo-800">{title}</h3>
    <div className="flex justify-between items-start space-x-6">
      <div className="w-1/2 p-4 border-r border-indigo-100">
        <h4 className="font-bold text-emerald-600 text-lg mb-4">Promised</h4>
        <ul className="space-y-3 text-slate-700">
          {promised.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 p-4">
        <h4 className="font-bold text-rose-600 text-lg mb-4">Reality</h4>
        <ul className="space-y-3 text-slate-700">
          {reality.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1 rounded">
      Source: {citation}
    </div>
  </div>
);

const ParadoxDisplay = () => {
  return (
    <div className="slide-container flex items-center justify-center">
      <div className="slide-content max-w-5xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          The Platform Governance Paradox
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <ParadoxCard
            title="Free Speech vs. Control"
            promised={['"Unrestricted expression"', '"Digital town square"']}
            reality={['Algorithmic filtering', 'Visibility controls']}
            citation="Gillespie (2018), pp. 24-25"
          />
          
          <ParadoxCard
            title="Transparency vs. Opacity"
            promised={['"More openness"', '"Public oversight"']}
            reality={['Reduced reporting', 'Limited accountability']}
            citation="Noble (2018), pp. 162-163"
          />
          
          <ParadoxCard
            title="User Agency vs. Corporate Power"
            promised={['"User empowerment"', '"Community control"']}
            reality={['Centralized control', 'Corporate oversight']}
            citation="Klonick (2018), pp. 1623-1624"
          />
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl mt-8 relative group">
          <p className="text-center text-indigo-900 font-medium">
            The platform's transition exemplifies what Klonick identifies as the tension between private corporate interests and public governance responsibilities.
          </p>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1 rounded">
            Analysis based on Klonick (2018) and Wang et al. (2024)
          </div>
        </div>

        <div className="text-sm text-center text-slate-500 mt-4">
          Hover over sections to view citations
        </div>
      </div>
    </div>
  );
};

export default ParadoxDisplay;
