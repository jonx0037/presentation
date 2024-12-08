import React from 'react'

const ResearchQuestions = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-slate-800">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          Research Questions
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Primary Question</h3>
            <p className="text-lg">
              How has Twitter's governance structure and content moderation approach evolved following Elon Musk's acquisition, and what are the implications for digital public discourse?
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-500">Secondary Questions</h3>
            <ul className="space-y-4">
              <li className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
                <p className="text-lg">
                  What specific changes in content moderation policies have been implemented since the acquisition?
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
                <p className="text-lg">
                  How have these changes affected user engagement and platform dynamics?
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
                <p className="text-lg">
                  What are the broader implications for digital governance and public discourse in social media platforms?
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchQuestions
