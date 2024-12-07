import React from 'react';

const ParadoxDisplay = () => {
  return (
    <div className="slide-container flex items-center justify-center">
      <div className="slide-content max-w-5xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          The Platform Governance Paradox
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <div className="card hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white">
            <h3 className="text-2xl font-bold mb-6 text-indigo-800">Free Speech vs. Control</h3>
            <div className="flex justify-between items-start space-x-6">
              <div className="w-1/2 p-4 border-r border-indigo-100">
                <h4 className="font-bold text-emerald-600 text-lg mb-4">Promised</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    "Unrestricted expression"
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    "Digital town square"
                  </li>
                </ul>
              </div>
              <div className="w-1/2 p-4">
                <h4 className="font-bold text-rose-600 text-lg mb-4">Reality</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Algorithmic filtering
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Visibility controls
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white">
            <h3 className="text-2xl font-bold mb-6 text-indigo-800">Transparency vs. Opacity</h3>
            <div className="flex justify-between items-start space-x-6">
              <div className="w-1/2 p-4 border-r border-indigo-100">
                <h4 className="font-bold text-emerald-600 text-lg mb-4">Promised</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    "More openness"
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    "Public oversight"
                  </li>
                </ul>
              </div>
              <div className="w-1/2 p-4">
                <h4 className="font-bold text-rose-600 text-lg mb-4">Reality</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Reduced reporting
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Limited accountability
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white">
            <h3 className="text-2xl font-bold mb-6 text-indigo-800">User Agency vs. Corporate Power</h3>
            <div className="flex justify-between items-start space-x-6">
              <div className="w-1/2 p-4 border-r border-indigo-100">
                <h4 className="font-bold text-emerald-600 text-lg mb-4">Promised</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    "User empowerment"
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    "Community control"
                  </li>
                </ul>
              </div>
              <div className="w-1/2 p-4">
                <h4 className="font-bold text-rose-600 text-lg mb-4">Reality</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Centralized control
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Corporate oversight
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParadoxDisplay;
