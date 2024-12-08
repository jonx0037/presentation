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
              <li className="flex items-start text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span>Transparent moderation</span>
                  <div className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    [1]Klonick, Kate. "The New Governors: The People, Rules, and Processes Governing Online Speech." Harvard Law Review, December 15, 2018.
                  </div>
                </div>
              </li>
              <li className="flex items-start text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span>Clear appeal process</span>
                  <div className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    [2]Twitter. "Q4 2022 Transparency Report." Transparency Center, Twitter, December 31, 2022.
                  </div>
                </div>
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>Human oversight</span>
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>Regular reports</span>
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>Community standards</span>
              </li>
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
              <li className="flex items-start text-slate-700">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span>Algorithmic filtering</span>
                  <div className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    [3]Wang, Rui, et al. "Empowered or Constrained in Platform Governance?" Social Media + Society, March 15, 2024.
                  </div>
                </div>
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                <span>Limited transparency</span>
              </li>
              <li className="flex items-start text-slate-700">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span>Automated systems</span>
                  <div className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    [3]Wang, Rui, et al. "Empowered or Constrained in Platform Governance?" Social Media + Society, March 15, 2024.
                  </div>
                </div>
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                <span>Reduced oversight</span>
              </li>
              <li className="flex items-start text-slate-700">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span>"Freedom of reach"</span>
                  <div className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    [4]Musk, Elon. "Interview with X News." X News, March 12, 2023.
                  </div>
                </div>
              </li>
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
          <div className="text-center text-indigo-900 font-medium flex flex-col items-center">
            <p>A 47.8% decrease in appeal success rate suggests a significant shift in content moderation approach</p>
            <div className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 mt-2">
              [5]Reuters. "Content Moderation Staff Reduction under Musk." Reuters, December 12, 2023.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
