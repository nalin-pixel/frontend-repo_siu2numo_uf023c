import TiltCard from './TiltCard'

const projects = [
  { id: 1, title: 'Aurora', tag: 'Brand, Web', color: 'from-pink-500 via-red-500 to-yellow-500' },
  { id: 2, title: 'Nebula', tag: 'Product, Motion', color: 'from-indigo-500 via-sky-500 to-teal-400' },
  { id: 3, title: 'Quasar', tag: '3D, Web', color: 'from-emerald-500 via-lime-400 to-amber-300' },
]

export default function InteractiveGrid() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected work</h2>
          <p className="mt-2 text-gray-600">A peek into recent launches and experiments.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <TiltCard key={p.id} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className={`aspect-video bg-gradient-to-tr ${p.color} opacity-90`} />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.tag}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
