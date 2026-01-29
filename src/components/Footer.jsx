import React from "react"

export default function Footer() {
  return (
    <footer className="
      bg-white/90 backdrop-blur
      border-t border-slate-200
      mt-16
      animate-fadeUp
    ">
      <div className="
        max-w-6xl mx-auto
        px-6 py-12
        grid gap-10
        md:grid-cols-3
      ">
        {/* Brand */}
        <div className="space-y-3">
          <div className="text-2xl font-bold text-primary tracking-tight">
            TalentYug
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Placement infrastructure platform empowering Tier 2 & Tier 3 colleges
            to connect with top recruiters.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="font-semibold text-slate-800">Product</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="hover:text-primary transition-colors cursor-pointer">Home</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Resources</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-semibold text-slate-800">Company</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="hover:text-primary transition-colors cursor-pointer">About</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-between gap-6">
          <div className="text-sm text-slate-600">
            Ready to transform campus placements?
          </div>
          <button className="
            bg-primary text-white
            px-5 py-3 rounded-lg
            font-semibold
            w-fit
            transition-all duration-200
            hover:scale-105 hover:shadow-lg
            active:scale-95
          ">
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="
        border-t border-slate-200
        py-4 text-center
        text-sm text-slate-500
      ">
        © 2025 TalentYug · Built for better placements
      </div>
    </footer>
  )
}
