import React from 'react'

const ResearchQuestions = () => {
  return (
    <div className="slide-container relative h-auto min-h-screen pt-16 pb-20 px-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-8 sticky top-0 bg-slate-50/90 py-2 backdrop-blur-sm">
          Research Questions
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Primary Question</h3>
            <p className="text-lg sm:text-base">
              How has Twitter's governance structure and content moderation approach evolved following Elon Musk's acquisition, and what are the implications for digital public discourse?
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-500">Secondary Questions</h3>
            <ul className="space-y-4">
              <li className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
                <p className="text-lg sm:text-base">
                  What specific changes in content moderation policies have been implemented since the acquisition?
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
                <p className="text-lg sm:text-base">
                  How have these changes affected user engagement and platform dynamics?
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
                <p className="text-lg sm:text-base">
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
