import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import InteractiveGrid from './components/InteractiveGrid'
import OnboardingForm from './components/OnboardingForm'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <InteractiveGrid />
        <OnboardingForm />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/test" className="hover:text-gray-900">System status</a>
            <a href="#onboard" className="hover:text-gray-900">Start a project</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
