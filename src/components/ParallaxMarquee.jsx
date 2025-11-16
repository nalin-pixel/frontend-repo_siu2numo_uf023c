import { useEffect, useRef } from 'react'

export default function ParallaxMarquee({ speed = 0.3 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf
    const onScroll = () => {
      const y = window.scrollY
      el.style.transform = `translateZ(0) translateX(${(y * speed) % window.innerWidth}px)`
      raf = requestAnimationFrame(() => {})
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div className="relative overflow-hidden">
      <div ref={ref} className="whitespace-nowrap text-6xl sm:text-8xl font-extrabold text-gray-100 select-none will-change-transform">
        • Creative • Brand • Product • Web • Motion • 3D • Creative • Brand • Product • Web • Motion • 3D •
      </div>
    </div>
  )
}
