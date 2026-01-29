import React from "react"

export default function Hero() {
  return (
    <section className="
      max-w-6xl mx-auto
      px-6
      pt-8 pb-12 md:pt-12 md:pb-16
    ">
      <div className="
        grid md:grid-cols-2
        gap-8 md:gap-8
        items-center
      ">
        {/* Left Content */}
        <div className="space-y-6 animate-fadeUp">
          <span className="
            inline-block
            text-sm font-semibold
            text-primary
            bg-primary/10
            px-4 py-1 rounded-full
          ">
            🇮🇳 Built for Indian Government Colleges
          </span>

          <h1 className="
            text-4xl md:text-5xl lg:text-6xl
            font-bold
            leading-tight
            tracking-tight
          ">
            Placement Infrastructure for
            <span className="text-primary"> Tier 2 & Tier 3 Colleges</span>
          </h1>

          <p className="
            text-lg md:text-xl
            text-slate-700
            max-w-xl
          ">
            A structured platform connecting colleges, companies, and students
            to streamline campus hiring and improve placement outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="
              bg-primary text-white
              px-6 py-3 rounded-lg
              font-semibold
              transition-all duration-200
              hover:scale-105 hover:shadow-lg
              active:scale-95
            ">
              For Colleges
            </button>

            <button className="
              bg-indigo-600 text-white
              px-6 py-3 rounded-lg
              font-semibold
              transition-all duration-200
              hover:scale-105 hover:shadow-lg
              active:scale-95
            ">
              For Companies
            </button>

            <button className="
              border border-slate-300
              px-6 py-3 rounded-lg
              font-semibold
              text-slate-700
              transition-all duration-200
              hover:bg-slate-50 hover:-translate-y-1
            ">
              For Students
            </button>
          </div>

          {/* Trust line */}
          <div className="text-sm text-slate-500 pt-2">
            Trusted by <span className="font-semibold text-slate-700">50+ colleges</span> across India
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="
          bg-white rounded-2xl
          shadow-lg
          p-8
          animate-scaleFade
        ">
          <div className="text-sm text-slate-500 font-medium">
            Placement Snapshot
          </div>

          <div className="mt-6 grid grid-cols-2 gap-5">
            {[
              { value: "70%", label: "Placement Rate" },
              { value: "₹5.5 LPA", label: "Avg. Salary" },
              { value: "50+", label: "Partner Colleges" },
              { value: "5000+", label: "Students Placed" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-slate-50
                  rounded-xl
                  p-5
                  text-center
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md
                "
              >
                <div className="text-2xl font-bold text-slate-900">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Subtle footer */}
          <div className="mt-6 text-xs text-slate-400 text-center">
            Data based on recent placement cycles
          </div>
        </div>
      </div>
    </section>
  )
}
