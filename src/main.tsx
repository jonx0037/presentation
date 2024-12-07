import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import TitleSlide from './components/TitleSlide'
import GovernanceParadox from './components/governance-paradox'
import GovernanceComparison from './components/governance-comparison'
import ImpactAnalysis from './components/impact-analysis'
import KeyStatistics from './components/key-statistics'
import ConclusionSummary from './components/conclusion-summary'

// Import Tailwind CSS
import './styles/main.css'

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    <TitleSlide />,
    <GovernanceParadox />,
    <GovernanceComparison />,
    <KeyStatistics />,
    <ImpactAnalysis />,
    <ConclusionSummary />
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'Space') {
        nextSlide()
      } else if (event.key === 'ArrowLeft') {
        previousSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-200">
        <div 
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-slate-600 font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 space-x-4 z-10">
        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className="nav-button"
          aria-label="Previous slide"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="nav-button"
          aria-label="Next slide"
        >
          Next
        </button>
      </div>

      {/* Current slide */}
      <div 
        className="w-full min-h-screen transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="flex min-h-screen">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="min-w-full min-h-screen flex-shrink-0"
              style={{ opacity: currentSlide === index ? 1 : 0.3 }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('ERROR: Root element not found!')
} else {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
