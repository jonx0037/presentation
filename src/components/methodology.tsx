import React from 'react';

interface MethodCardProps {
  title: string;
  children: React.ReactNode;
  citation?: string;
}

const MethodCard: React.FC<MethodCardProps> = ({ title, children, citation }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-100 relative group">
    <h3 className="text-xl font-semibold mb-4 text-indigo-500">{title}</h3>
    {children}
    {citation && (
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1 rounded">
        Source: {citation}
      </div>
    )}
  </div>
);

const Methodology = () => {
  return (
    <div className="slide-container relative h-screen pt-16 pb-20 px-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-8 sticky top-0 bg-slate-50/90 py-2 backdrop-blur-sm">
          Research Methodology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MethodCard 
            title="Critical Discourse Analysis" 
            citation="Fairclough, 1995"
          >
            <ul className="space-y-3 list-disc list-inside">
              <li>Text analysis of policy documents</li>
              <li>Discursive practice examination</li>
              <li>Social practice context</li>
              <li>Power relationship analysis</li>
            </ul>
          </MethodCard>

          <MethodCard 
            title="Primary Data Sources"
            citation="Gillespie, 2018"
          >
            <ul className="space-y-3 list-disc list-inside">
              <li>Platform policy documentation</li>
              <li>Official communications</li>
              <li>Transparency reports</li>
              <li>Public statements</li>
            </ul>
          </MethodCard>

          <MethodCard 
            title="Analysis Framework"
            citation="Klonick, 2018"
          >
            <ul className="space-y-3 list-disc list-inside">
              <li>Governance structure evaluation</li>
              <li>Policy impact assessment</li>
              <li>Comparative analysis</li>
              <li>Stakeholder analysis</li>
            </ul>
          </MethodCard>

          <MethodCard 
            title="Research Scope"
            citation="Wang et al., 2024"
          >
            <p className="mb-2">Analysis Period:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Pre-acquisition baseline: 2021-2022</li>
              <li>Post-acquisition analysis: 2022-2024</li>
            </ul>
          </MethodCard>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 mt-6 relative group">
          <h3 className="text-xl font-semibold mb-4 text-indigo-500">Methodological Limitations</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Limited access to algorithmic decision-making processes</li>
            <li>Opacity of internal moderation guidelines</li>
            <li>Restricted access to user engagement metrics</li>
            <li>Rapidly evolving platform changes</li>
          </ul>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1 rounded">
            Limitations framework adapted from Roberts (2019) and Noble (2018)
          </div>
        </div>

        <div className="text-sm text-center text-slate-500 mt-8">
          Hover over sections to view citations
        </div>
      </div>
    </div>
  );
};

export default Methodology;
