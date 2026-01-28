import React from 'react'

export default function Hero(){
  return (
    <section className="max-w-6xl mx-auto py-16 md:py-20 px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Placement Infrastructure for Indian Government college Colleges</h1>
          <p className="mt-4 text-lg text-slate-700">Connect Colleges, Companies & Students through one structured platform.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn-primary transition-transform transform hover:-translate-y-1">For Colleges</button>
            <button className="btn-primary bg-secondary text-white transition-transform transform hover:-translate-y-1">For Companies</button>
            <button className="btn-ghost transition-transform transform hover:-translate-y-1">For Students</button>
          </div>
        </div>
        <div className="card animate-fadeIn">
          <div className="text-sm text-slate-500">Quick stats</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="font-bold text-2xl">70%</div>
              <div className="text-sm text-slate-600">Placements</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="font-bold text-2xl">5.5L</div>
              <div className="text-sm text-slate-600">Average Salary</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="font-bold text-2xl">50+</div>
              <div className="text-sm text-slate-600">Colleges</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="font-bold text-2xl">5000+</div>
              <div className="text-sm text-slate-600">Students Placed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
