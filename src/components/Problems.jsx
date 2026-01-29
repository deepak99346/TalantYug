import React from "react"

export default function Problems() {
  const cards = [
    {
      title: "Manual Placement Process",
      desc: "Spreadsheets, emails, and paperwork slow down hiring and cause errors."
    },
    {
      title: "Weak Company Network",
      desc: "Limited recruiter outreach reduces quality job opportunities."
    },
    {
      title: "Low Student Readiness",
      desc: "Skill gaps and lack of mock interviews impact hiring outcomes."
    },
    {
      title: "No Analytics & Visibility",
      desc: "Colleges lack data to track placement performance and gaps."
    },
  ]

  return (
    <section
      className="
        max-w-6xl mx-auto
        px-6
        pt-12 pb-16
      "
    >
      {/* Heading */}
      <div className="max-w-2xl mb-10 animate-fadeUp">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Why Tier 2 & Tier 3 placements fail
        </h2>
        <p className="mt-3 text-slate-600">
          Most colleges struggle with outdated systems, limited reach, and
          lack of actionable insights.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {cards.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl p-6
              border border-slate-200
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-lg
              animate-fadeUp
            "
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Index */}
            <div className="
              text-sm font-semibold text-primary
              bg-primary/10
              w-8 h-8 rounded-full
              flex items-center justify-center
              mb-4
            ">
              {i + 1}
            </div>

            <h3 className="font-semibold text-lg text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
