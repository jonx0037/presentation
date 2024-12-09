import React, { FC } from 'react';

interface Citation {
  type: 'book' | 'article' | 'report' | 'document';
  citation: string;
  document?: string;
  url?: string;
}

const Citations: FC = () => {
  const [activeType, setActiveType] = React.useState<'all' | 'book' | 'article' | 'report' | 'document'>('all');

  // Function to get the correct asset path based on environment
  const getAssetPath = (filename: string): string => {
    const base = import.meta.env.PROD ? '/presentation' : '';
    return `${base}/assets/files/${filename}`;
  };

  const citations: Citation[] = [
    {
      type: 'book',
      citation: 'Balkin, Jack M. "Old-School/New-School Speech Regulation." Harvard Law Review, vol. 127, no. 8, 2014, pp. 2296-2342.'
    },
    {
      type: 'book',
      citation: 'Benjamin, Ruha. Race After Technology: Abolitionist Tools for the New Jim Code. Polity, 2019.'
    },
    {
      type: 'book',
      citation: 'Bratton, Benjamin. The Stack: On Software and Sovereignty. MIT Press, 2015.'
    },
    {
      type: 'book',
      citation: 'Burgess, Jean, and Nancy K. Baym. Twitter: A Biography. NYU Press, 2020.'
    },
    {
      type: 'article',
      citation: 'Douek, Evelyn. "Governing Online Speech: From Posts-as-Trumps to Proportionality and Probability." Columbia Law Review, vol. 121, no. 3, 2021, pp. 759-834.'
    },
    {
      type: 'book',
      citation: 'Gillespie, Tarleton. Custodians of the Internet: Platforms, Content Moderation, and the Hidden Decisions That Shape Social Media. Yale UP, 2018.'
    },
    {
      type: 'book',
      citation: 'Jaffer, Jameel. The Fight for Privacy: Protecting Dignity, Identity, and Love in the Digital Age. Viking, 2022.'
    },
    {
      type: 'book',
      citation: 'Kaye, David. Speech Police: The Global Struggle to Govern the Internet. Columbia Global Reports, 2019.'
    },
    {
      type: 'article',
      citation: 'Klonick, Kate. "The New Governors: The People, Rules, and Processes Governing Online Speech." Harvard Law Review, vol. 131, no. 6, 2018, pp. 1598-1670.'
    },
    {
      type: 'article',
      citation: 'Musk, Elon. "Interview with X News." X News, March 12, 2023, www.xnews.com/interview-elon-musk.'
    },
    {
      type: 'book',
      citation: 'Noble, Safiya Umoja. Algorithms of Oppression: How Search Engines Reinforce Racism. NYU Press, 2018.'
    },
    {
      type: 'book',
      citation: 'Pasquale, Frank. The Black Box Society: The Secret Algorithms That Control Money and Information. Harvard UP, 2015.'
    },
    {
      type: 'article',
      citation: 'Reuters. "Content Moderation Staff Reduction under Musk." Reuters, December 12, 2023, www.reuters.com/tech.'
    },
    {
      type: 'book',
      citation: 'Roberts, Sarah T. Behind the Screen: Content Moderation in the Shadows of Social Media. Yale UP, 2019.'
    },
    {
      type: 'book',
      citation: 'Tufekci, Zeynep. Twitter and Tear Gas: The Power and Fragility of Networked Protest. Yale UP, 2017.'
    },
    {
      type: 'report',
      citation: 'X Corp. "Global Transparency Report H1 2024." X Transparency Center, 2024.',
      url: 'https://transparency.x.com/en',
      document: getAssetPath('x-global-transparency-report-h1-compressed.pdf')
    },
    {
      type: 'document',
      citation: 'Twitter, Inc. Twitter Terms of Service. August 19, 2021.',
      document: getAssetPath('Twitter_User_Agreement_EN2021.pdf')
    },
    {
      type: 'book',
      citation: 'Vaidhyanathan, Siva. Antisocial Media: How Facebook Disconnects Us and Undermines Democracy. Oxford UP, 2018.'
    },
    {
      type: 'article',
      citation: 'Wang, Rui, et al. "Empowered or Constrained in Platform Governance? An Analysis of Twitter Users Responses to Elon Musks Takeover." Social Media + Society, vol. 10, no. 2, 2024, pp. 1-14.'
    },
    {
      type: 'book',
      citation: 'Wu, Tim. The Attention Merchants: The Epic Scramble to Get Inside Our Heads. Knopf, 2016.'
    },
    {
      type: 'document',
      citation: 'X Corp. X Terms of Service. 15 Nov. 2024.',
      document: getAssetPath('x-terms-of-service-2024-11-15.pdf')
    },
    {
      type: 'document',
      citation: 'Rocha, Jonathan. The Illusion of Absolute Free Speech: How Twitters Evolution to X Reveals the Paradox of Platform Governance. 2024.',
      document: getAssetPath('The Illusion of Absolute Free Speech- How Twitter\'s Evolution to X Reveals the Paradox of Platform Governance.pdf')
    },
    {
      type: 'book',
      citation: 'Zuboff, Shoshana. The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power. Public Affairs, 2019.'
    }
  ];

  const filteredCitations = activeType === 'all' 
    ? citations 
    : citations.filter(citation => citation.type === activeType);

  const typeCount = {
    all: citations.length,
    book: citations.filter(c => c.type === 'book').length,
    article: citations.filter(c => c.type === 'article').length,
    report: citations.filter(c => c.type === 'report').length,
    document: citations.filter(c => c.type === 'document').length,
  };

  return (
    <div className="slide-container h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto w-full px-8 pt-8 pb-4">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          Works Cited
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {(['all', 'book', 'article', 'report', 'document'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeType === type
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-indigo-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} ({typeCount[type]})
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Citations Container */}
      <div className="flex-1 overflow-auto px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCitations.map((citation, index) => (
              <div
                key={index}
                className="citation p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        {
                          book: 'bg-blue-100 text-blue-700',
                          article: 'bg-green-100 text-green-700',
                          report: 'bg-yellow-100 text-yellow-700',
                          document: 'bg-purple-100 text-purple-700'
                        }[citation.type]
                      }`}>
                        {citation.type}
                      </span>
                    </div>
                    <p className="text-slate-700">
                      {citation.citation}
                    </p>
                    <div className="mt-4 flex gap-2">
                      {citation.document && (
                        <a
                          href={citation.document}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors duration-200 text-sm group"
                        >
                          <svg 
                            className="w-4 h-4 mr-2 group-hover:animate-bounce" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                            />
                          </svg>
                          View Document
                        </a>
                      )}
                      {citation.url && (
                        <a
                          href={citation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors duration-200 text-sm group"
                        >
                          <svg 
                            className="w-4 h-4 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                            />
                          </svg>
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citations;
