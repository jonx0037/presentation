import React, { useState } from 'react';

interface PolicyChange {
  date: string;
  title: string;
  description: string;
  impact: string;
  document?: string;
  url?: string;
  citation: string;
  source: {
    type: 'article' | 'report' | 'document';
    author: string;
    publication?: string;
    year: string;
  };
}

const PolicyTimeline: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<number>(0);
  const [showCitation, setShowCitation] = useState<boolean>(false);

  // Function to get the correct asset path based on environment
  const getAssetPath = (filename: string) => {
    const base = import.meta.env.PROD ? '/presentation' : '';
    return `${base}/assets/files/${filename}`;
  };

  const policies: PolicyChange[] = [
    {
      date: "August 19, 2021",
      title: "Twitter Terms of Service",
      description: "The terms governing the Twitter platform prior to X's acquisition",
      impact: "Defined the rules and policies for Twitter users",
      document: getAssetPath('Twitter_User_Agreement_EN2021.pdf'),
      citation: "Twitter, Inc. Twitter Terms of Service. August 19, 2021.",
      source: {
        type: 'document',
        author: 'Twitter, Inc.',
        year: '2021'
      }
    },
    {
      date: "January 2023",
      title: "API Access Policy Modification",
      description: "Restricted researchers' ability to study platform dynamics",
      impact: "Limited external oversight and academic research capabilities",
      url: "https://transparency.x.com/en",
      document: getAssetPath('x-global-transparency-report-h1-compressed.pdf'),
      citation: "X Corp. 'Global Transparency Report H1 2024.' X Transparency Center, 2024.",
      source: {
        type: 'report',
        author: 'X Corp.',
        publication: 'X Transparency Center',
        year: '2024'
      }
    },
    {
      date: "July 2023", 
      title: "News Link Presentation Change",
      description: "Removed headlines from shared news links",
      impact: "Affected information distribution and context sharing",
      url: "https://transparency.x.com/en",
      document: getAssetPath('x-global-transparency-report-h1-compressed.pdf'),
      citation: "X Corp. 'Global Transparency Report H1 2024.' X Transparency Center, 2024.",
      source: {
        type: 'report',
        author: 'X Corp.',
        publication: 'X Transparency Center',
        year: '2024'
      }
    },
    {
      date: "December 2023",
      title: "Community Notes Implementation", 
      description: "Replaced partnerships with fact-checking organizations",
      impact: "Shifted fact-checking responsibility to user community",
      url: "https://transparency.x.com/en",
      document: getAssetPath('x-global-transparency-report-h1-compressed.pdf'),
      citation: "X Corp. 'Global Transparency Report H1 2024.' X Transparency Center, 2024.",
      source: {
        type: 'report',
        author: 'X Corp.',
        publication: 'X Transparency Center',
        year: '2024'
      }
    },
    {
      date: "Q1 2024",
      title: "Election Content Policy",
      description: "Modified approach to election-related content",
      impact: "Changed how political discourse is moderated",
      citation: "Rocha, Jonathan. The Illusion of Absolute Free Speech: How Twitter's Evolution to X Reveals the Paradox of Platform Governance. 2024.",
      document: getAssetPath('The Illusion of Absolute Free Speech- How Twitter\'s Evolution to X Reveals the Paradox of Platform Governance.pdf'),
      source: {
        type: 'report',
        author: 'Rocha',
        year: '2024'
      }
    },
    {
      date: "Q2 2024",
      title: "Monetization Integration",
      description: "Tied content visibility to premium features",
      impact: "Created tiered access to platform reach",
      citation: "Rocha, Jonathan. The Illusion of Absolute Free Speech: How Twitter's Evolution to X Reveals the Paradox of Platform Governance. 2024.",
      document: getAssetPath('The Illusion of Absolute Free Speech- How Twitter\'s Evolution to X Reveals the Paradox of Platform Governance.pdf'),
      source: {
        type: 'report',
        author: 'Rocha',
        year: '2024'
      }
    },
    {
      date: "Q3 2024",
      title: "Updated X Terms of Service",
      description: "The new terms governing the platform under X's ownership",
      impact: "Decreased public transparency and accountability",
      document: getAssetPath('x-terms-of-service-2024-11-15.pdf'),
      citation: "X Corp. X Terms of Service. 15 Nov. 2024.",
      source: {
        type: 'document',
        author: 'X Corp.',
        year: '2024'
      }
    }
  ];

  return (
    <div className="slide-container relative h-screen pt-16 pb-20 px-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-indigo-900 mb-8 sticky top-0 bg-slate-50/90 py-2 backdrop-blur-sm">
          Platform Policy Evolution Timeline
        </h2>

        {/* Timeline Navigation */}
        <div className="relative mb-8">
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
            <h3 className="text-xl font-bold text-indigo-900">
              {policies[activePolicy].title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Citation Section */}
          <div className="mt-6 border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowCitation(!showCitation)}
                className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
              >
                <svg
                  className={`w-5 h-5 mr-2 transition-transform duration-200 ${
                    showCitation ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Source Citation
              </button>

              <div className="flex gap-2">
                {policies[activePolicy].url && (
                  <a
                    href={policies[activePolicy].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 group"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                    Visit Website
                  </a>
                )}
                {policies[activePolicy].document && (
                  <a
                    href={policies[activePolicy].document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 group"
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
                    View Document
                  </a>
                )}
              </div>
            </div>

            {showCitation && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    {
                      article: 'bg-green-100 text-green-700',
                      report: 'bg-yellow-100 text-yellow-700',
                      document: 'bg-purple-100 text-purple-700'
                    }[policies[activePolicy].source.type]
                  }`}>
                    {policies[activePolicy].source.type}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-slate-600">
                      {policies[activePolicy].citation}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      {policies[activePolicy].source.author}
                      {policies[activePolicy].source.publication && ` • ${policies[activePolicy].source.publication}`}
                      {` • ${policies[activePolicy].source.year}`}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
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
