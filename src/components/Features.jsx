import React from 'react'

export default function Features(){
  const items = ['College Dashboard','Pre-filtered Candidates','QR-based Registration','Smart Analytics','Interview Resources']
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 transition-smooth stagger">
      <h3 className="text-2xl font-bold">Feature Highlights</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((it,i)=> (
          <div key={i} className="card animate-fadeUp" style={{animationDelay: `${i * 70}ms`}}>
            <div className="font-semibold">{it}</div>
            <div className="text-sm text-slate-600 mt-2">Example UI preview placeholder for {it.toLowerCase()}.</div>
          </div>
        ))}
      </div>
    </section>
  )
}
