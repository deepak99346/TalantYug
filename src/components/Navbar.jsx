import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(scroll, 120)
    } else {
      scroll()
    }

    setOpen(false)
  }

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur
        border-b border-slate-200
      "
    >
      {/* Main bar */}
      <div
        className="
          max-w-6xl mx-auto
          px-6
          h-16
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="
            text-2xl font-bold
            text-primary
            tracking-tight
            cursor-pointer
          "
        >
          TalentYug
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Home", "home"],
            ["Technology", "technology"],
            ["Travel", "travel"],
            ["Events", "events"],
            ["About", "about"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="
                relative text-slate-700 font-medium
                transition-colors duration-200
                hover:text-primary
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-primary
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="
              hidden md:inline-flex
              bg-primary text-white
              px-5 py-2.5 rounded-lg
              font-semibold
              transition-all duration-200
              hover:scale-105 hover:shadow-md
              active:scale-95
            "
          >
            Get Started
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open Menu"
            className="
              md:hidden
              p-2 rounded-lg
              border border-slate-300
              transition hover:bg-slate-50
            "
          >
            <svg
              className="w-5 h-5 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-out
          ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white border-t px-6 py-4 space-y-4">
          {[
            ["Home", "home"],
            ["For Colleges", "technology"],
            ["For Companies", "travel"],
            ["For Students", "events"],
            ["About", "about"],
            ["Resources", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="
                block w-full text-left
                text-slate-700 font-medium
                py-2
                transition-colors hover:text-primary
              "
            >
              {label}
            </button>
          ))}

          <div className="pt-2 flex gap-3">
            <button className="btn-ghost w-full font-medium">
              Login
            </button>
            <button
              onClick={() => {
                setOpen(false)
                navigate("/dashboard")
              }}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
