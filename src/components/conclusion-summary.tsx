import React from 'react';

const ConclusionDisplay: React.FC = () => {
  return (
    <div className="slide-container flex items-center justify-center">
      <div className="slide-content max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Research Conclusions
        </h2>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Key Findings */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-800 border-b border-indigo-100 pb-2">
              Key Findings
            </h3>
            <div className="space-y-4">
              <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-indigo-50 to-white">
                <h4 className="text-lg font-semibold text-indigo-900 mb-2">Platform Ownership Impact</h4>
                <p className="text-slate-600">
                  Dramatic shift in governance structure and moderation approach, leading to reduced transparency and accountability.
                </p>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-indigo-50 to-white">
                <h4 className="text-lg font-semibold text-indigo-900 mb-2">Algorithmic Control</h4>
                <p className="text-slate-600">
                  Transition from transparent human moderation to opaque algorithmic filtering systems, affecting content visibility.
                </p>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-indigo-50 to-white">
                <h4 className="text-lg font-semibold text-indigo-900 mb-2">User Empowerment Paradox</h4>
                <p className="text-slate-600">
                  Despite rhetoric of free speech, evidence shows increased centralized corporate control over user expression.
                </p>
              </div>
            </div>
          </div>

          {/* Future Implications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-800 border-b border-indigo-100 pb-2">
              Future Implications
            </h3>
            <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-900 mb-3">Regulatory Framework</h4>
                  <p className="text-slate-600">
                    Need for new governance models that balance platform autonomy with public interest.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-indigo-900 mb-3">Freedom vs Responsibility</h4>
                  <p className="text-slate-600">
                    Critical balance between unrestricted expression and protecting user safety.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-indigo-900 mb-3">Transparency Requirements</h4>
                  <p className="text-slate-600">
                    Essential need for clear oversight mechanisms and public accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Insight */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 rounded-xl text-white shadow-lg">
          <p className="text-xl text-center font-medium leading-relaxed">
            The transformation of Twitter to X represents a crucial case study in platform governance,
            highlighting the complex relationship between private ownership, public discourse, and
            democratic values in digital spaces.
          </p>
        </div>

        {/* Citation */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>Jonathan Aaron Rocha</p>
          <p>jr159@my.tamuct.edu</p>
          <p>ENGL 5374 - Research Methods in Graduate Studies</p>
        </div>

      </div>
    </div>
  );
};

export default ConclusionDisplay;
