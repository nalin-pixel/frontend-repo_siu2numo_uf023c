import { useRef, useState } from 'react'

export default function MagneticButton({ to = '#', children, variant = 'primary', className = '' }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const moveX = (relX - midX) * 0.2
    const moveY = (relY - midY) * 0.2
    el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${active ? 1.02 : 1})`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0,0,0) scale(1)'
  }

  const base = 'relative inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold transition-[transform,background,box-shadow] duration-200 will-change-transform transform-gpu focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles =
    variant === 'secondary'
      ? 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-300'
      : 'bg-gray-900 text-white shadow hover:bg-gray-800 focus:ring-gray-900'

  return (
    <a
      href={to}
      className={`${base} ${styles} ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false)
        reset()
      }}
      onMouseMove={handleMove}
    >
      <span ref={ref}>{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          boxShadow: variant === 'secondary' ? 'none' : '0 10px 30px rgba(17, 24, 39, 0.25)'
        }}
      />
    </a>
  )
}
