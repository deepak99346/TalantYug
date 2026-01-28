import React from 'react'

export default function ForStudents(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">Find verified job opportunities</h1>
          <p className="mt-4 text-slate-700">Create profiles, prepare and apply to campus drives.</p>
        </div>
        <div className="card">Hero visual / student dashboard preview</div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Problems</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="card">Unemployment</div>
          <div className="card">No guidance</div>
          <div className="card">No structured prep</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Steps</h2>
        <div className="mt-6 card">
          <ol className="list-decimal list-inside space-y-2">
            <li>Create profile</li>
            <li>Browse opportunities</li>
            <li>Prepare (resources)</li>
            <li>Apply + track status</li>
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Interview Prep Resources</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="card">Aptitude</div>
          <div className="card">DSA</div>
          <div className="card">HR Questions</div>
          <div className="card">Resume Tips</div>
        </div>
      </section>
    </div>
  )
}
