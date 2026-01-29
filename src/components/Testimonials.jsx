import React from 'react'

export default function Testimonials(){
  const cards = [
    {title: 'TPO Review', text: '"Improved our placements significantly."'},
    {title: 'HR Review', text: '"Candidates were pre-vetted and ready."'},
    {title: 'Student Story', text: '"Got placed through campus drive!"'}
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 transition-smooth stagger">
      <h3 className="text-2xl font-bold">Testimonials & Case Study</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {cards.map((c,i)=> (
          <div key={i} className="card animate-fadeUp" style={{animationDelay: `${i * 90}ms`}}>
            <div className="font-semibold">{c.title}</div>
            <div className="text-sm text-slate-600 mt-2">{c.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
