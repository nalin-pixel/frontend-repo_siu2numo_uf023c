import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import OnboardingForm from './components/OnboardingForm'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <section id="work" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected work</h2>
              <p className="mt-2 text-gray-600">A peek into recent launches and experiments.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
                  <div className="aspect-video bg-gray-100" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">Project {i}</h3>
                    <p className="text-sm text-gray-600">Brand, product, and web</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
