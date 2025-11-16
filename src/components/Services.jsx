export default function Services() {
  const items = [
    { id: 'brand', title: 'Brand Identity', desc: 'Strategy, naming, and visual systems that stand out.' },
    { id: 'product', title: 'Product Design', desc: 'UX/UI for mobile and web with motion and micro-interactions.' },
    { id: 'web', title: 'Web Experiences', desc: 'High-performance websites with 3D and immersive visuals.' },
    { id: 'content', title: 'Content & Campaigns', desc: 'Launch creative with video, social, and performance assets.' },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</h2>
          <p className="mt-2 text-gray-600">Full-stack creative across brand, product, and content.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <div key={s.id} className="group rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all bg-white">
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
