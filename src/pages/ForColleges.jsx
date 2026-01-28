import React from 'react'

export default function ForColleges(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">Simplify placement management</h1>
          <p className="mt-4 text-slate-700">Manage registers, drives and analytics in one place.</p>
        </div>
        <div className="card">Hero visual / signup preview</div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Challenges faced</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="card">Manual processes</div>
          <div className="card">Low visibility</div>
          <div className="card">Resource constraints</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">7-Step Process</h2>
        <div className="mt-6 card">
          <ol className="list-decimal list-inside space-y-2">
            <li>Register college</li>
            <li>Verify TPO</li>
            <li>Add students</li>
            <li>Post drives</li>
            <li>Track applications</li>
            <li>Schedule interviews</li>
            <li>Placement analytics</li>
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Dashboard Features</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="card">Drive Management</div>
          <div className="card">Analytics</div>
          <div className="card">Student Profiles</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="card">Starter</div>
          <div className="card">Growth</div>
          <div className="card">Enterprise</div>
        </div>
      </section>
    </div>
  )
}
