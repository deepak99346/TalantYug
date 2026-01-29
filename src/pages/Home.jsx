import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach(el => observer.observe(el))
  }, [])

  return (
    <div>
      <section id="home" className="reveal">
        <Hero />
      </section>

      <section id="technology" className="mt-8 reveal">
        <Stats />
      </section>

      <section id="travel" className="mt-8 reveal">
        <Problems />
      </section>

      <section id="events" className="mt-8 reveal">
        <Solutions />
        <Features />
      </section>

      <section id="about" className="mt-8 reveal">
        <Testimonials />
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-12 reveal">
        <div className="card hover-lift text-center">
          <h3 className="text-2xl font-bold">Ready to improve placements?</h3>
          <div className="mt-4 flex justify-center gap-4">
            <button className="btn-primary hover-glow">Join as College</button>
            <button className="btn-primary hover-glow">Company</button>
            <button className="btn-ghost">Student</button>
          </div>
        </div>
      </section>
    </div>
  )
}
