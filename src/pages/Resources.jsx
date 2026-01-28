import React from 'react'

export default function Resources(){
  const blogs = [
    'How placements work in Tier 2 colleges',
    'Top interview mistakes',
    'Salary trends 2026'
  ]
  const faqs = {
    Colleges: ['How to register?', 'Pricing details'],
    Companies: ['How to post job?', 'Hiring SLA'],
    Students: ['How to apply?', 'Eligibility']
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Resources</h1>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Blog</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {blogs.map((b,i)=> (
            <div key={i} className="card">
              <div className="font-semibold">{b}</div>
              <div className="text-sm text-slate-600 mt-2">Short excerpt about the article.</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">FAQs</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {Object.entries(faqs).map(([k,arr])=> (
            <div key={k} className="card">
              <div className="font-semibold">{k}</div>
              <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                {arr.map((q,qi)=> <li key={qi}>{q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
