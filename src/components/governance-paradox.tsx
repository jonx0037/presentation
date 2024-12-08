import React from 'react';

interface ParadoxCardProps {
  title: string;
  promised: string[];
  reality: string[];
  citation: string;
}

const ParadoxCard: React.FC<ParadoxCardProps> = ({ title, promised, reality, citation }) => (
  <div className="card bg-white rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white relative group mb-4">
    <h3 className="text-xl font-bold mb-3 text-indigo-800 px-4 pt-4">{title}</h3>
    <div className="flex justify-between items-start px-4 pb-8">
      <div className="w-1/2 pr-4 border-r border-indigo-100">
        <h4 className="font-bold text-emerald-600 text-base mb-2">Promised</h4>
        <ul className="space-y-2 text-slate-700">
          {promised.map((item, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="mr-2">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 pl-4">
        <h4 className="font-bold text-rose-600 text-base mb-2">Reality</h4>
        <ul className="space-y-2 text-slate-700">
          {reality.map((item, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="mr-2">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1">
      Source: {citation}
    </div>
  </div>
);

const ParadoxDisplay = () => {
  return (
    <div className="slide-container relative h-screen pt-16 pb-20 px-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-indigo-900 mb-6 sticky top-0 bg-slate-50/90 py-2 backdrop-blur-sm">
          The Platform Governance Paradox
        </h2>

        <div className="space-y-4">
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

        <div className="bg-indigo-50 p-4 rounded-xl mt-4 mb-2 relative group">
          <p className="text-center text-indigo-900 font-medium text-sm pb-4">
            The platform's transition exemplifies what Klonick identifies as the tension between private corporate interests and public governance responsibilities.
          </p>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1">
            Analysis based on Klonick (2018) and Wang et al. (2024)
          </div>
        </div>

        <div className="text-xs text-center text-slate-500 mt-4">
          Hover over sections to view citations
        </div>
      </div>
    </div>
  );
};

export default ParadoxDisplay;
