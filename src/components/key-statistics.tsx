import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  trend?: 'positive' | 'negative' | null;
  subtitle?: string;
  citation?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend = null, subtitle = null, citation = null }) => (
  <div className="card hover:shadow-xl transition-all duration-300 relative group">
    <h4 className="text-lg font-medium text-slate-600 mb-2">{title}</h4>
    <div className="flex items-baseline space-x-2">
      <span className={`text-3xl font-bold ${trend === 'negative' ? 'text-rose-600' : trend === 'positive' ? 'text-emerald-600' : 'text-slate-900'}`}>
        {value}
      </span>
      {trend && (
        <span className={`text-sm font-medium ${trend === 'negative' ? 'text-rose-500' : 'text-emerald-500'}`}>
          {trend === 'negative' ? '↓' : '↑'}
        </span>
      )}
    </div>
    {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    {citation && (
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1 rounded">
        Source: <span className="citation-hover" data-citation={citation}>citation</span>
      </div>
    )}
  </div>
);

const StatisticsDisplay: React.FC = () => {
  return (
    <div className="slide-container flex items-center justify-center">
      <div className="slide-content max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Key Platform Governance Metrics
        </h2>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Moderation Changes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-800 border-b border-indigo-100 pb-2">
              Moderation Changes
            </h3>
            <div className="grid gap-6">
              <StatCard
                title="Content Moderation Staff"
                value="71%"
                trend="negative"
                subtitle="Reduction in human oversight"
                citation="Reuters, December 2023"
              />
              <StatCard
                title="User Issue Reports"
                value="54%"
                trend="negative"
                subtitle="Increase in reported problems"
                citation="Reuters, December 2023"
              />
              <StatCard
                title="Appeal Success Rate"
                value="48%"
                trend="negative"
                subtitle="Decrease in successful appeals"
                citation="Twitter Q4 2022 vs X Q2 2023 Reports"
              />
            </div>
          </div>

          {/* User Impact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-800 border-b border-indigo-100 pb-2">
              User Impact Analysis
            </h3>
            <div className="grid gap-6">
              <div className="card hover:shadow-xl transition-all duration-300 relative group">
                <h4 className="text-lg font-medium text-slate-600 mb-4">Content Appeals Comparison</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">2022 Q4</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-32 bg-indigo-600 rounded"></div>
                      <span className="font-bold text-slate-900">17,459</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">2023 Q2</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-16 bg-indigo-300 rounded"></div>
                      <span className="font-bold text-slate-900">8,234</span>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1 rounded">
                  Source: <span className="citation-hover" data-citation="Twitter. &quot;Q4 2022 Transparency Report.&quot; Transparency Center, Twitter, 2022, transparency.twitter.com/en/reports/2022-q4.">Twitter/X Transparency Reports</span>
                </div>
              </div>
              
              <StatCard
                title="User Trust Impact"
                value="67%"
                subtitle="Users reporting decreased confidence"
                citation="Wang, Rui, et al. &quot;Empowered or Constrained in Platform Governance? An Analysis of Twitter Users' Responses to Elon Musk's Takeover.&quot; Social Media + Society, vol. 10, no. 2, 2024, pp. 1–14."
              />
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 relative group">
          <p className="text-center text-indigo-900 font-medium">
            The significant reduction in moderation staff correlates with a marked increase in user-reported issues,
            suggesting a potential gap in platform governance effectiveness.
          </p>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 right-0 text-xs text-center text-slate-500 bg-white/90 py-1 rounded">
            Analysis based on <span className="citation-hover" data-citation="Reuters. &quot;Content Moderation Staff Reduction under Musk.&quot; Reuters, December 12, 2023, www.reuters.com/tech.">Reuters (2023)</span> and <span className="citation-hover" data-citation="Wang, Rui, et al. &quot;Empowered or Constrained in Platform Governance? An Analysis of Twitter Users' Responses to Elon Musk's Takeover.&quot; Social Media + Society, vol. 10, no. 2, 2024, pp. 1–14.">Wang et al. (2024)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDisplay;
