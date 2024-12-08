import React from 'react';

const Citations = () => {
  return (
    <div className="slide-container flex items-center justify-center p-8 bg-slate-50">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          Works Cited
        </h2>
        
        <div className="space-y-4 text-sm text-slate-700">
          <div className="citation p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="pl-8 -indent-8">
              Benjamin, Ruha. <em>Race After Technology: Abolitionist Tools for the New Jim Code</em>. Polity, 2019.
            </p>
          </div>
          
          <div className="citation p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="pl-8 -indent-8">
              Douek, Evelyn. "Governing Online Speech: From 'Posts-as-Trumps' to Proportionality and Probability." <em>Columbia Law Review</em>, vol. 121, no. 3, 2021, pp. 759-834.
            </p>
          </div>
          
          <div className="citation p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="pl-8 -indent-8">
              Gillespie, Tarleton. <em>Custodians of the Internet: Platforms, Content Moderation, and the Hidden Decisions That Shape Social Media</em>. Yale UP, 2018.
            </p>
          </div>
          
          <div className="citation p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="pl-8 -indent-8">
              Klonick, Kate. "The New Governors: The People, Rules, and Processes Governing Online Speech." <em>Harvard Law Review</em>, vol. 131, no. 6, 2018, pp. 1598-1670.
            </p>
          </div>
          
          <div className="citation p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="pl-8 -indent-8">
              Noble, Safiya Umoja. <em>Algorithms of Oppression: How Search Engines Reinforce Racism</em>. NYU Press, 2018.
            </p>
          </div>
          
          <div className="citation p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="pl-8 -indent-8">
              Reuters. "Content Moderation Staff Reduction under Musk." <em>Reuters</em>, December 12, 2023, www.reuters.com/tech.
            </p>
          </div>
          
          <div className="citation p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="pl-8 -indent-8">
              Wang, Rui, et al. "Empowered or Constrained in Platform Governance? An Analysis of Twitter Users' Responses to Elon Musk's Takeover." <em>Social Media + Society</em>, vol. 10, no. 2, 2024, pp. 1-14.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citations;
