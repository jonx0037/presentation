import React from 'react'

const Methodology = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-slate-800">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          Research Methodology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Data Collection</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Platform policy documentation analysis</li>
              <li>Public statements and announcements</li>
              <li>User engagement metrics</li>
              <li>Content moderation reports</li>
              <li>Third-party platform analysis</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Analysis Framework</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Comparative analysis (pre/post acquisition)</li>
              <li>Policy impact assessment</li>
              <li>Stakeholder analysis</li>
              <li>Governance structure evaluation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Time Period</h3>
            <p>
              Primary analysis period: October 2022 - Present
              <br />
              Comparative baseline: January 2022 - October 2022
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Research Approach</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Mixed-methods analysis</li>
              <li>Quantitative metrics evaluation</li>
              <li>Qualitative policy analysis</li>
              <li>Case study examination</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4 text-indigo-500">Limitations</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Data accessibility constraints</li>
            <li>Rapidly evolving platform changes</li>
            <li>Limited internal documentation access</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Methodology
