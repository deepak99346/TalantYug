import React from 'react'

export default function Stats(){
  const items = [
    {title: '70% Placements'},
    {title: '5.5L Avg Salary'},
    {title: '50+ Colleges'},
    {title: '5000+ Students'}
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 animate-fadeUp">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, idx)=> (
          <div key={idx} className="card text-center animate-fadeUp" style={{animationDelay: `${idx * 80}ms`}}>
            <div className="text-2xl font-bold">{it.title.split(' ')[0]}</div>
            <div className="text-sm text-slate-600 mt-2">{it.title.replace(it.title.split(' ')[0],'').trim()}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
