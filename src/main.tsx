import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import TitleSlide from './components/TitleSlide'
import ResearchQuestions from './components/research-questions'
import Methodology from './components/methodology'
import GovernanceParadox from './components/governance-paradox'
import GovernanceComparison from './components/governance-comparison'
import PolicyTimeline from './components/policy-timeline'
import ImpactAnalysis from './components/impact-analysis'
import KeyStatistics from './components/key-statistics'
import ResearchAreas from './components/research-areas'
import ConclusionSummary from './components/conclusion-summary'

// Import Tailwind CSS
import './styles/main.css'

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  
  const slides = [
    { component: <TitleSlide />, title: 'Introduction' },
    { component: <ResearchQuestions />, title: 'Research Questions' },
    { component: <Methodology />, title: 'Methodology' },
    { component: <GovernanceParadox />, title: 'Governance Paradox' },
    { component: <GovernanceComparison />, title: 'Governance Evolution' },
    { component: <PolicyTimeline />, title: 'Policy Changes' },
    { component: <KeyStatistics />, title: 'Key Statistics' },
    { component: <ImpactAnalysis />, title: 'Impact Analysis' },
    { component: <ResearchAreas />, title: 'Future Research' },
    { component: <ConclusionSummary />, title: 'Conclusion' }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setMenuOpen(false)
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide()
      } else if (event.key === 'ArrowLeft') {
        previousSlide()
      } else if (event.key === 'Escape') {
        setMenuOpen(false)
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
          className="h-full bg-indigo-600 transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-4 left-4 z-50 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-slate-600 font-medium hover:bg-white/90 transition-colors"
      >
        {menuOpen ? 'Close Menu' : 'Menu'}
      </button>

      {/* Slide menu */}
      {menuOpen && (
        <div className="absolute inset-0 bg-black/50 z-40 backdrop-blur-sm">
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Slides</h3>
            <ul className="space-y-2">
              {slides.map((slide, index) => (
                <li key={index}>
                  <button
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      currentSlide === index
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    {index + 1}. {slide.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-slate-600 font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 space-x-4 z-10">
        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className="nav-button disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="nav-button disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          Next
        </button>
      </div>

      {/* Slides container */}
      <div className="w-full min-h-screen">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="min-w-full min-h-screen flex-shrink-0"
            >
              {slide.component}
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
