import React from "react"

export default function ForColleges() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeUp space-y-5">
          <span className="
            inline-block text-sm font-semibold
            text-primary bg-primary/10
            px-4 py-1 rounded-full
          ">
            For Colleges & TPOs
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simplify Placement
            <span className="text-primary"> Management</span>
          </h1>

          <p className="text-lg text-slate-700 max-w-xl">
            Manage students, placement drives, recruiters, and analytics
            from a single structured dashboard.
          </p>

          <button className="
            bg-primary text-white
            px-6 py-3 rounded-lg
            font-semibold
            transition-all duration-200
            hover:scale-105 hover:shadow-lg
            active:scale-95
          ">
            Request Demo
          </button>
        </div>

        <div className="
          bg-white rounded-2xl border border-slate-200
          p-8 text-center text-slate-500
          animate-scaleFade
        ">
          Dashboard preview / product visual
        </div>
      </section>

      {/* Challenges */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight animate-fadeUp">
          Challenges Colleges Face Today
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Manual Processes",
              desc: "Spreadsheets and paperwork slow down placement operations."
            },
            {
              title: "Low Visibility",
              desc: "No real-time view of drives, applications, or outcomes."
            },
            {
              title: "Resource Constraints",
              desc: "Limited TPO bandwidth to manage large student volumes."
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
          Our 7-Step Placement Workflow
        </h2>

        <div className="
          mt-8 bg-white border border-slate-200
          rounded-2xl p-8
          animate-fadeUp
        ">
          <ol className="grid sm:grid-cols-2 gap-4 list-decimal list-inside text-slate-700">
            {[
              "Register your college",
              "Verify Training & Placement Officer",
              "Upload student data securely",
              "Create and publish placement drives",
              "Track applications in real-time",
              "Schedule interviews and results",
              "Analyze placement performance",
            ].map((step, i) => (
              <li key={i} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight animate-fadeUp">
          Dashboard Features
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Drive Management",
              desc: "Create, manage, and monitor placement drives easily."
            },
            {
              title: "Placement Analytics",
              desc: "Track placement rates, salaries, and company performance."
            },
            {
              title: "Student Profiles",
              desc: "Centralized academic, skill, and resume data."
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="
                bg-slate-50 border border-slate-200
                rounded-2xl p-6
                transition-all duration-300
                hover:bg-white hover:shadow-md
                animate-fadeUp
              "
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight animate-fadeUp">
          Simple & Transparent Pricing
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              plan: "Starter",
              price: "Free",
              desc: "For small colleges starting placements"
            },
            {
              plan: "Growth",
              price: "₹₹",
              desc: "For growing institutions with multiple drives"
            },
            {
              plan: "Enterprise",
              price: "Custom",
              desc: "For large universities & state boards"
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
              <div className="mt-2 text-3xl font-bold text-primary">
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
