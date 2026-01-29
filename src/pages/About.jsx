import React from "react"

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
      {/* Header */}
      <div className="max-w-2xl animate-fadeUp">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About TalentYug
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Founded in 2025 by students from IIT Patna, TalentYug is built to fix
          the broken placement ecosystem of Tier 2 & Tier 3 colleges in India.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="
          bg-white border border-slate-200 rounded-2xl p-6
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg
          animate-fadeUp
        ">
          <h3 className="text-lg font-semibold text-slate-900">
            🎯 Our Mission
          </h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            To make campus placements transparent, structured, and fair for
            students and colleges beyond metro cities.
          </p>
        </div>

        <div className="
          bg-white border border-slate-200 rounded-2xl p-6
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg
          animate-fadeUp
          [animation-delay:120ms]
        ">
          <h3 className="text-lg font-semibold text-slate-900">
            🌱 Our Vision
          </h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            To create equitable career opportunities across India by empowering
            institutions with modern placement infrastructure.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mt-14 animate-fadeUp">
        <h2 className="text-2xl font-bold tracking-tight">
          What We Believe In
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            "Transparency",
            "Merit over background",
            "Data-driven decisions",
            "Student-first approach",
          ].map((value, i) => (
            <div
              key={i}
              className="
                bg-slate-50
                border border-slate-200
                rounded-xl
                p-4 text-center
                font-medium text-slate-700
                transition-all duration-300
                hover:bg-white hover:shadow-md
              "
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight animate-fadeUp">
          Our Team
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { role: "CEO", desc: "Strategy & partnerships" },
            { role: "CTO", desc: "Platform & engineering" },
            { role: "Head of Product", desc: "User experience & growth" },
          ].map((member, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-2xl p-6
                text-center
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
                animate-fadeUp
              "
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="
                w-14 h-14 mx-auto mb-4
                rounded-full bg-primary/10
                flex items-center justify-center
                text-primary font-bold text-lg
              ">
                {member.role[0]}
              </div>

              <div className="font-semibold text-slate-900">
                {member.role}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                {member.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
