import React from 'react';

const TitleSlide = () => {
  return (
    <div className="gradient-bg slide-container flex flex-col items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          The Illusion of Absolute Free Speech
        </h1>
        <h2 className="text-3xl text-blue-100 font-light">
          How Twitter's Evolution to X Reveals the Paradox of Platform Governance
        </h2>
        
        <div className="flex justify-center items-center space-x-12 mt-12">
          <div className="text-blue-200 transform transition-transform hover:scale-110">
            <svg width="64" height="64" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-white text-5xl font-light animate-pulse">→</div>
          <div className="text-white font-bold text-6xl transform transition-transform hover:scale-110">X</div>
        </div>
        
        <div className="mt-16 space-y-2">
          <p className="text-xl text-blue-100 font-medium">Jonathan Aaron Rocha</p>
          <p className="text-lg text-blue-200">ENGL 5374 - Research Methods in Graduate Studies</p>
            <a href="mailto:jr159@my.tamuct.edu" className="text-lg text-blue-200 hover:text-blue-300 transition-colors">jr159@my.tamuct.edu</a>
        </div>

      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-400/10 rounded-full translate-x-24 translate-y-24" />
    </div>
  );
};

export default TitleSlide;
