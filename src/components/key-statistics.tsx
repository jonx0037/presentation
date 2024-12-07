import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  trend?: 'positive' | 'negative' | null;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend = null, subtitle = null }) => (
  <div className="card hover:shadow-xl transition-all duration-300">
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
              />
              <StatCard
                title="User Issue Reports"
                value="54%"
                trend="negative"
                subtitle="Increase in reported problems"
              />
              <StatCard
                title="Appeal Success Rate"
                value="48%"
                trend="negative"
                subtitle="Decrease in successful appeals"
              />
            </div>
          </div>

          {/* User Impact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-800 border-b border-indigo-100 pb-2">
              User Impact Analysis
            </h3>
            <div className="grid gap-6">
              <div className="card hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-medium text-slate-600 mb-4">Content Appeals Comparison</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">2022</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-32 bg-indigo-600 rounded"></div>
                      <span className="font-bold text-slate-900">17,459</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">2023</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-16 bg-indigo-300 rounded"></div>
                      <span className="font-bold text-slate-900">8,234</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <StatCard
                title="User Trust Impact"
                value="67%"
                subtitle="Users reporting decreased confidence"
              />
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
          <p className="text-center text-indigo-900 font-medium">
            The significant reduction in moderation staff (71%) correlates with a 54% increase in user-reported issues,
            suggesting a potential gap in platform governance effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDisplay;
