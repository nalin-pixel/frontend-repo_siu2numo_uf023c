import Spline from '@splinetool/react-spline'
import ParallaxMarquee from './ParallaxMarquee'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const handleSplineClick = (e) => {
    const name = e?.target?.name
    if (!name) return
    // Map named Spline objects to on-page actions
    const map = {
      'Hotspot-Onboard': '#onboard',
      'Hotspot-Work': '#work',
      'CTA-Start': '#onboard',
      'CTA-SeeWork': '#work',
    }
    const hash = map[name]
    if (hash) {
      window.location.hash = hash
    }
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onMouseDown={handleSplineClick}
        />
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
            <MagneticButton to="#onboard" className="group">
              Start a project
            </MagneticButton>
            <MagneticButton to="#work" variant="secondary" className="group">
              See our work
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <ParallaxMarquee />
      </div>
    </section>
  )
}
