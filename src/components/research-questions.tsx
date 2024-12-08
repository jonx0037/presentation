import React from 'react'

const ResearchQuestions = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="section-header">
          Research Questions
        </h2>
        
        <div className="space-y-8">
          <div className="research-card">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Primary Question</h3>
            <p className="text-lg sm:text-base">
              How has Twitter's governance structure and content moderation approach evolved following Elon Musk's acquisition, and what are the implications for digital public discourse?
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-500">Secondary Questions</h3>
            <ul className="space-y-4">
              <li className="research-question-card">
                <p className="text-lg sm:text-base">
                  What specific changes in content moderation policies have been implemented since the acquisition?
                </p>
              </li>
              <li className="research-question-card">
                <p className="text-lg sm:text-base">
                  How have these changes affected user engagement and platform dynamics?
                </p>
              </li>
              <li className="research-question-card">
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
