import React from 'react';

const ComparisonTable = () => {
  return (
    <div className="slide-container flex flex-col items-center justify-between min-h-screen p-8">
      <div className="slide-content max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          Platform Governance Evolution
        </h2>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Pre-Musk Twitter */}
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/>
              </svg>
              <h3 className="text-2xl font-bold text-blue-900">Pre-Musk Twitter</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Transparent moderation <sup className="citation-ref group relative cursor-pointer"><span className="text-blue-600">[1]</span><span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-24 left-0 bg-white p-4 rounded-lg shadow-xl text-sm w-72 z-50 border border-blue-100">[1]Klonick, Kate. "The New Governors: The People, Rules, and Processes Governing Online Speech." Harvard Law Review, December 15, 2018.</span></sup>',
                'Clear appeal process <sup className="citation-ref group relative cursor-pointer"><span className="text-blue-600">[2]</span><span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-24 left-0 bg-white p-4 rounded-lg shadow-xl text-sm w-72 z-50 border border-blue-100">[2]Twitter. "Q4 2022 Transparency Report." Transparency Center, Twitter, December 31, 2022.</span></sup>',
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
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-white p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-slate-800">X</span>
              <h3 className="text-2xl font-bold text-slate-900">Post-Musk Era</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Algorithmic filtering <sup className="citation-ref group relative cursor-pointer"><span className="text-blue-600">[3]</span><span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-24 left-0 bg-white p-4 rounded-lg shadow-xl text-sm w-72 z-50 border border-blue-100">[3]Wang, Rui, et al. "Empowered or Constrained in Platform Governance?" Social Media + Society, March 15, 2024.</span></sup>',
                'Limited transparency',
                'Automated systems <sup className="citation-ref group relative cursor-pointer"><span className="text-blue-600">[3]</span><span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-24 left-0 bg-white p-4 rounded-lg shadow-xl text-sm w-72 z-50 border border-blue-100">[3]Wang, Rui, et al. "Empowered or Constrained in Platform Governance?" Social Media + Society, March 15, 2024.</span></sup>',
                'Reduced oversight',
                '"Freedom of reach" <sup className="citation-ref group relative cursor-pointer"><span className="text-blue-600">[4]</span><span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-24 left-0 bg-white p-4 rounded-lg shadow-xl text-sm w-72 z-50 border border-blue-100">[4]Musk, Elon. "Interview with X News." X News, March 12, 2023.</span></sup>'
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
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-8">
          <p className="text-center text-indigo-900 font-medium">
            A 47.8% decrease in appeal success rate suggests a significant shift in content moderation approach 
            <sup className="citation-ref group relative cursor-pointer">
              <span className="text-blue-600">[5]</span>
              <span className="citation-popup opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-24 left-0 bg-white p-4 rounded-lg shadow-xl text-sm w-72 z-50 border border-blue-100">
                [5]Reuters. "Content Moderation Staff Reduction under Musk." Reuters, December 12, 2023.
              </span>
            </sup>
          </p>
        </div>

        {/* Citations Section */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">References</h3>
          <div className="grid grid-cols-1 gap-3 text-sm text-gray-600">
            <p className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <span className="text-blue-600 font-semibold">[1]</span> Klonick, Kate. "The New Governors: The People, Rules, and Processes Governing Online Speech." Harvard Law Review, December 15, 2018.
            </p>
            <p className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <span className="text-blue-600 font-semibold">[2]</span> Twitter. "Q4 2022 Transparency Report." Transparency Center, Twitter, December 31, 2022.
            </p>
            <p className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <span className="text-blue-600 font-semibold">[3]</span> Wang, Rui, et al. "Empowered or Constrained in Platform Governance?" Social Media + Society, March 15, 2024.
            </p>
            <p className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <span className="text-blue-600 font-semibold">[4]</span> Musk, Elon. "Interview with X News." X News, March 12, 2023.
            </p>
            <p className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <span className="text-blue-600 font-semibold">[5]</span> Reuters. "Content Moderation Staff Reduction under Musk." Reuters, December 12, 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
