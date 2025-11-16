export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/40 bg-white/60 backdrop-blur px-4 py-2 shadow-sm">
          <a href="#" className="font-semibold text-gray-900">Flames Studio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-800">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#onboard" className="hover:text-gray-900">Start a project</a>
          </nav>
          <a href="#onboard" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-white text-sm font-semibold hover:bg-gray-800">Get in touch</a>
        </div>
      </div>
    </header>
  )
}
