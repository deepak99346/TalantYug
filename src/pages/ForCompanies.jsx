import React from 'react'

export default function ForCompanies(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">Hire from curated Tier 2/3 talent</h1>
          <p className="mt-4 text-slate-700">Post jobs, get pre-filtered candidates and streamline hiring.</p>
        </div>
        <div className="card">Hero visual / job post preview</div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Hiring Problems</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="card">Low quality applicants</div>
          <div className="card">Manual screening</div>
          <div className="card">High time to hire</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 card">
          <ol className="list-decimal list-inside space-y-2">
            <li>Post job</li>
            <li>Get candidates</li>
            <li>Shortlist</li>
            <li>Interview</li>
            <li>Hire</li>
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="card">Pay per job</div>
          <div className="card">Monthly</div>
          <div className="card">Enterprise</div>
        </div>
      </section>
    </div>
  )
}
