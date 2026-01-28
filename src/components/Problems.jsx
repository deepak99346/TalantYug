import React from 'react'

export default function Problems(){
  const cards = [
    'Manual placement process',
    'Weak company network',
    'Low student readiness',
    'No analytics/visibility'
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 animate-fadeUp">
      <h2 className="text-3xl font-bold">Why Tier 2/3 placements fail?</h2>
      <div className="mt-6 grid md:grid-cols-4 gap-6">
        {cards.map((c,i)=> (
          <div key={i} className="card animate-fadeUp" style={{animationDelay: `${i * 90}ms`}}>
            <div className="font-semibold">{c}</div>
            <div className="text-sm text-slate-600 mt-2">Short description about {c.toLowerCase()}.</div>
          </div>
        ))}
      </div>
    </section>
  )
}
