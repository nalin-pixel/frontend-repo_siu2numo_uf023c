import { useState } from 'react'

const SERVICE_OPTIONS = [
  'Brand Identity',
  'Product Design',
  'Web Experience',
  'Content & Campaigns',
]

export default function OnboardingForm() {
  const [status, setStatus] = useState({ state: 'idle' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || undefined,
      services: formData.getAll('services'),
      budget_range: formData.get('budget') || undefined,
      timeline: formData.get('timeline') || undefined,
      goals: formData.get('goals') || undefined,
      message: formData.get('message') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/onboarding/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ state: 'success', id: data.id })
      form.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="onboard" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Start a project</h2>
          <p className="mt-2 text-gray-600">Tell us about your goals and we’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required name="name" type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input name="company" type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">What do you need?</label>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((opt) => (
                <label key={opt} className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                  <input name="services" type="checkbox" value={opt} className="h-4 w-4 text-gray-900" />
                  <span className="text-sm text-gray-800">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Budget</label>
              <select name="budget" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900">
                <option value="">Select range</option>
                <option>Under $10k</option>
                <option>$10k - $25k</option>
                <option>$25k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Timeline</label>
              <select name="timeline" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900">
                <option value="">Select</option>
                <option>ASAP</option>
                <option>1-2 months</option>
                <option>3-6 months</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Primary goals</label>
            <textarea name="goals" rows="3" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Anything else?</label>
            <textarea name="message" rows="3" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold shadow hover:bg-gray-800 transition-colors">
              Submit
            </button>
            {status.state === 'loading' && <p className="text-gray-600">Sending…</p>}
            {status.state === 'success' && <p className="text-emerald-600">Thanks! We’ll reach out shortly.</p>}
            {status.state === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
