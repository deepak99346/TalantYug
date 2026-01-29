import React from "react"

export default function ForCompanies() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 animate-fadeUp">
          <span className="
            inline-block text-sm font-semibold
            text-indigo-600 bg-indigo-600/10
            px-4 py-1 rounded-full
          ">
            For Companies & Recruiters
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hire from
            <span className="text-indigo-600"> Curated Tier 2 & 3 Talent</span>
          </h1>

          <p className="text-lg text-slate-700 max-w-xl">
            Access pre-verified candidates, reduce screening time,
            and close roles faster through a structured campus hiring platform.
          </p>

          <button className="
            bg-indigo-600 text-white
            px-6 py-3 rounded-lg
            font-semibold
            transition-all duration-200
            hover:scale-105 hover:shadow-lg
            active:scale-95
          ">
            Post a Job
          </button>
        </div>

        <div className="
          bg-white border border-slate-200
          rounded-2xl p-8 text-center
          text-slate-500
          animate-scaleFade
        ">
          Job posting / candidate dashboard preview
        </div>
      </section>

      {/* Problems */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight animate-fadeUp">
          Common Hiring Challenges
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Low Quality Applicants",
              desc: "Unfiltered resumes lead to wasted recruiter time."
            },
            {
              title: "Manual Screening",
              desc: "Shortlisting thousands of profiles slows hiring."
            },
            {
              title: "High Time to Hire",
              desc: "Delays cause companies to lose top talent."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
                animate-fadeUp
              "
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <h3 className="font-semibold text-lg text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight animate-fadeUp">
          How Hiring Works on TalentYug
        </h2>

        <div className="
          mt-8 bg-white border border-slate-200
          rounded-2xl p-8
          animate-fadeUp
        ">
          <ol className="grid sm:grid-cols-2 gap-4 list-decimal list-inside text-slate-700">
            {[
              "Post job requirements",
              "Receive curated candidate pool",
              "Shortlist based on skills & criteria",
              "Schedule interviews",
              "Make offers and hire",
            ].map((step, i) => (
              <li key={i} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight animate-fadeUp">
          Flexible Pricing for Every Team
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              plan: "Pay Per Job",
              price: "₹",
              desc: "One-time fee per job posting"
            },
            {
              plan: "Monthly Plan",
              price: "₹₹",
              desc: "Unlimited hiring for growing teams"
            },
            {
              plan: "Enterprise",
              price: "Custom",
              desc: "Dedicated hiring solutions at scale"
            },
          ].map((plan, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-2xl p-6 text-center
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
                animate-fadeUp
              "
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="font-semibold text-lg">
                {plan.plan}
              </div>
              <div className="mt-2 text-3xl font-bold text-indigo-600">
                {plan.price}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {plan.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
