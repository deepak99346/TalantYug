import React from 'react'

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-slate-700">Founded by IIT Patna students in 2025.</p>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-sm text-slate-600 mt-2">Make placements fair and structured for Tier 2/3 colleges.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Vision</h3>
          <p className="text-sm text-slate-600 mt-2">Create equitable career outcomes across India.</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Team</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="card">CEO</div>
          <div className="card">CTO</div>
          <div className="card">Head of Product</div>
        </div>
      </section>
    </div>
  )
}
