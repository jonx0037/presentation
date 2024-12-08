import React, { useState } from 'react';

interface ResearchArea {
  title: string;
  questions: string[];
  citation?: string;
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
      ],
      citation: "Klonick, Kate. \"The New Governors: The People, Rules, and Processes Governing Online Speech.\" Harvard Law Review, vol. 131, no. 6, 2018, pp. 1598–1670."
    },
    {
      title: "User Behavior and Platform Migration",
      questions: [
        "Longitudinal studies of user engagement patterns",
        "Content creator adaptation strategies",
        "User migration patterns between platforms",
        "Impact on different user demographics"
      ],
      citation: "Burgess, Jean, and Nancy K. Baym. Twitter: A Biography. NYU Press, 2020."
    },
    {
      title: "Platform Economics and Content Moderation",
      questions: [
        "Relationship between monetization and visibility",
        "Subscription model effects on governance",
        "Economic impacts of reduced moderation",
        "Hidden costs comparison: algorithmic vs human"
      ],
      citation: "Gillespie, Tarleton. Custodians of the Internet: Platforms, Content Moderation, and the Hidden Decisions That Shape Social Media. Yale UP, 2018."
    },
    {
      title: "Democratic Discourse and Public Sphere",
      questions: [
        "Platform policy effects on political dialogue",
        "Misinformation spread patterns analysis",
        "Impact on electoral discourse",
        "Role of crowd-sourced moderation"
      ],
      citation: "Douek, Evelyn. \"Governing Online Speech: From 'Posts-as-Trumps' to Proportionality and Probability.\" Columbia Law Review, vol. 121, no. 3, 2021, pp. 759–834."
    },
    {
      title: "Legal and Regulatory Implications",
      questions: [
        "Comparative regulatory framework analysis",
        "Legal frameworks for platform accountability",
        "Platform ownership and media regulations",
        "Self-regulation vs government oversight"
      ],
      citation: "Balkin, Jack M. \"Old-School/New-School Speech Regulation.\" Harvard Law Review, vol. 127, no. 8, 2014, pp. 2296–2342."
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

        <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 relative group">
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

          {areas[activeArea].citation && (
            <div className="absolute -bottom-2 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/90 text-xs text-slate-600 py-2 px-4 rounded-b-xl text-center border-t border-indigo-100">
                {areas[activeArea].citation}
              </div>
            </div>
          )}
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
