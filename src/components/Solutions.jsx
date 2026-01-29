import React from 'react'

export default function Solutions(){
  const blocks = [
    {title: 'College Placement Management', text: 'Tools for TPOs to manage drives and analytics.'},
    {title: 'Company Hiring Pipeline', text: 'Structured hiring flows with prefilters.'},
    {title: 'Student Career Preparation', text: 'Resources, mock interviews and tracking.'}
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 transition-smooth stagger">
      <h2 className="text-3xl font-bold">TalentYug solves this with Placement Infrastructure</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {blocks.map((b,i)=> (
          <div key={i} className="card animate-fadeUp" style={{animationDelay: `${i * 90}ms`}}>
            <div className="font-semibold text-lg">{b.title}</div>
            <div className="text-sm text-slate-600 mt-2">{b.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
