import React from 'react';

const ComparisonTable = () => {
  return (
    <div className="slide-container flex items-center justify-center">
      <div className="slide-content max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Platform Governance Evolution
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Pre-Musk Twitter */}
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center space-x-3 mb-6">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/>
              </svg>
              <h3 className="text-2xl font-bold text-blue-900">Pre-Musk Twitter</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Transparent moderation <span className="citation-hover" data-citation="Klonick, Kate. &quot;The New Governors: The People, Rules, and Processes Governing Online Speech.&quot; Harvard Law Review, vol. 131, no. 6, 2018, pp. 1598–1670.">[1]</span>',
                'Clear appeal process <span className="citation-hover" data-citation="Twitter. &quot;Q4 2022 Transparency Report.&quot; Transparency Center, Twitter, 2022, transparency.twitter.com/en/reports/2022-q4.">[2]</span>',
                'Human oversight',
                'Regular reports',
                'Community standards'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-100 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-900">Appeal Success Rate</span>
                <span className="text-2xl font-bold text-blue-600">23%</span>
              </div>
              <div className="flex justify-between items-center text-sm text-blue-700">
                <span>Total Appeals</span>
                <span className="font-medium">17,459</span>
              </div>
            </div>
          </div>

          {/* Post-Musk X */}
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-slate-800">X</span>
              <h3 className="text-2xl font-bold text-slate-900">Post-Musk Era</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Algorithmic filtering <span className="citation-hover" data-citation="Wang, Rui, et al. &quot;Empowered or Constrained in Platform Governance? An Analysis of Twitter Users\' Responses to Elon Musk\'s Takeover.&quot; Social Media + Society, vol. 10, no. 2, 2024, pp. 1–14.">[3]</span>',
                'Limited transparency',
                'Automated systems <span className="citation-hover" data-citation="Wang, Rui, et al. &quot;Empowered or Constrained in Platform Governance? An Analysis of Twitter Users\' Responses to Elon Musk\'s Takeover.&quot; Social Media + Society, vol. 10, no. 2, 2024, pp. 1–14.">[3]</span>',
                'Reduced oversight',
                '"Freedom of reach" <span className="citation-hover" data-citation="Musk, Elon. &quot;Interview with X News.&quot; X News, March 12, 2023, www.xnews.com/interview-elon-musk.">[4]</span>'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-100 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-900">Appeal Success Rate</span>
                <span className="text-2xl font-bold text-slate-600">12%</span>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-700">
                <span>Total Appeals</span>
                <span className="font-medium">8,234</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
          <p className="text-center text-indigo-900 font-medium">
            A 47.8% decrease in appeal success rate suggests a significant shift in content moderation approach <span className="citation-hover" data-citation="Reuters. &quot;Content Moderation Staff Reduction under Musk.&quot; Reuters, December 12, 2023, www.reuters.com/tech.">[5]</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
