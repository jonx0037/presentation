import React, { useState } from 'react';

interface ResearchArea {
  title: string;
  questions: string[];
}

const ResearchAreas: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const areas: ResearchArea[] = [
    {
      title: "Algorithmic Governance and Transparency",
      questions: [
        "Quantitative analysis of visibility filtering effects",
        "Comparative studies of algorithmic moderation",
        "Impact of 'freedom of speech, not freedom of reach' policies",
        "Methodologies for external algorithm auditing"
      ]
    },
    {
      title: "User Behavior and Platform Migration",
      questions: [
        "Longitudinal studies of user engagement patterns",
        "Content creator adaptation strategies",
        "User migration patterns between platforms",
        "Impact on different user demographics"
      ]
    },
    {
      title: "Platform Economics and Content Moderation",
      questions: [
        "Relationship between monetization and visibility",
        "Subscription model effects on governance",
        "Economic impacts of reduced moderation",
        "Hidden costs comparison: algorithmic vs human"
      ]
    },
    {
      title: "Democratic Discourse and Public Sphere",
      questions: [
        "Platform policy effects on political dialogue",
        "Misinformation spread patterns analysis",
        "Impact on electoral discourse",
        "Role of crowd-sourced moderation"
      ]
    },
    {
      title: "Legal and Regulatory Implications",
      questions: [
        "Comparative regulatory framework analysis",
        "Legal frameworks for platform accountability",
        "Platform ownership and media regulations",
        "Self-regulation vs government oversight"
      ]
    }
  ];

  return (
    <div className="slide-container flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Future Research Directions
        </h2>

        <div className="grid grid-cols-5 gap-4 mb-8">
          {areas.map((area, index) => (
            <button
              key={index}
              className={`p-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeArea === index
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-indigo-50'
              }`}
              onClick={() => setActiveArea(index)}
            >
              {area.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">
            {areas[activeArea].title}
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            {areas[activeArea].questions.map((question, index) => (
              <div
                key={index}
                className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-slate-700">{question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
          <p className="text-center text-indigo-900 font-medium">
            These research directions aim to advance our understanding of platform governance and its implications for digital democracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;
