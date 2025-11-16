import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            A colorful 3D assembly line for ideas → products
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            We design bold brands and digital experiences
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            A full-service creative agency crafting identities, websites, and content that ship with momentum.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#onboard" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold shadow hover:bg-gray-800 transition-colors">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
    </section>
  )
}
