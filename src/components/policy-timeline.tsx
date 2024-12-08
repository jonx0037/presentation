import React, { useState } from 'react';

interface PolicyChange {
  date: string;
  title: string;
  description: string;
  impact: string;
  document?: string;
}

const PolicyTimeline: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<number>(0);

  const policies: PolicyChange[] = [
    {
      date: "August 19, 2021",
      title: "Twitter Terms of Service",
      description: "The terms governing the Twitter platform prior to X's acquisition",
      impact: "Defined the rules and policies for Twitter users",
      document: "/src/assets/files/Twitter_User_Agreement_EN2021.pdf"
    },
    {
      date: "January 2023",
      title: "API Access Policy Modification",
      description: "Restricted researchers' ability to study platform dynamics",
      impact: "Limited external oversight and academic research capabilities"
    },
    {
      date: "July 2023", 
      title: "News Link Presentation Change",
      description: "Removed headlines from shared news links",
      impact: "Affected information distribution and context sharing"
    },
    {
      date: "December 2023",
      title: "Community Notes Implementation", 
      description: "Replaced partnerships with fact-checking organizations",
      impact: "Shifted fact-checking responsibility to user community"
    },
    {
      date: "Q1 2024",
      title: "Election Content Policy",
      description: "Modified approach to election-related content",
      impact: "Changed how political discourse is moderated"
    },
    {
      date: "Q2 2024",
      title: "Monetization Integration",
      description: "Tied content visibility to premium features",
      impact: "Created tiered access to platform reach"  
    },
    {
      date: "Q3 2024",
      title: "Updated X Terms of Service",
      description: "The new terms governing the platform under X's ownership",
      impact: "Decreased public transparency and accountability",
      document: "/src/assets/files/x-terms-of-service-2024-11-15.pdf"
    }
  ];

  return (
    <div className="slide-container flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Platform Policy Evolution Timeline
        </h2>

        {/* Timeline Navigation */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-1 bg-indigo-100 top-1/2 transform -translate-y-1/2">
            <div 
              className="h-full bg-indigo-600 transition-all duration-500"
              style={{ width: `${((activePolicy + 1) / policies.length) * 100}%` }}
            />
          </div>
          
          <div className="relative flex justify-between">
            {policies.map((policy, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index <= activePolicy
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white border-2 border-indigo-200 text-indigo-400'
                }`}
                onClick={() => setActivePolicy(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Policy Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-indigo-500">
              {policies[activePolicy].date}
            </span>
            <h3 className="text-2xl font-bold text-indigo-900">
              {policies[activePolicy].title}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-700">Description</h4>
              <p className="text-slate-600 bg-slate-50 p-4 rounded-lg">
                {policies[activePolicy].description}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-700">Impact</h4>
              <p className="text-slate-600 bg-indigo-50 p-4 rounded-lg">
                {policies[activePolicy].impact}
              </p>
            </div>
          </div>

          {policies[activePolicy].document && (
            <div className="mt-6 flex justify-center">
              <a
                href={policies[activePolicy].document}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 group"
              >
                <svg 
                  className="w-5 h-5 mr-2 group-hover:animate-bounce" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                View Full Document
              </a>
            </div>
          )}
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
          <p className="text-center text-indigo-900 font-medium">
            Each policy change represents a significant shift in X's approach to platform governance and content moderation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyTimeline;
