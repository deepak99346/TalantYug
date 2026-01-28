import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

export default function Home(){
  return (
    <div>
      <Hero />
      <Stats />
      <Problems />
      <Solutions />
      <Features />
      <Testimonials />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="card text-center">
          <h3 className="text-2xl font-bold">Ready to improve placements?</h3>
          <div className="mt-4 flex justify-center gap-4">
            <button className="btn-primary">Join as College</button>
            <button className="btn-primary bg-secondary">Company</button>
            <button className="btn-ghost">Student</button>
          </div>
        </div>
      </section>
    </div>
  )
}
