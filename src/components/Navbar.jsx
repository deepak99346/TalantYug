import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const linkClass = ({isActive}) => `nav-link ${isActive ? 'text-primary font-semibold active font-heading' : 'text-slate-700 font-medium font-heading'}`
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="text-primary font-heading font-bold text-2xl tracking-tight">TalentYug</div>
          <nav className="hidden md:flex gap-6 ml-6">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/colleges" className={linkClass}>For Colleges</NavLink>
            <NavLink to="/companies" className={linkClass}>For Companies</NavLink>
            <NavLink to="/students" className={linkClass}>For Students</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/resources" className={linkClass}>Resources</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex gap-3">
            <button className="btn-ghost font-medium">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>

          <button onClick={() => setOpen(v => !v)} aria-label="Menu" className="md:hidden p-2 rounded-lg border">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-700">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-t slide-down">
          <div className="max-w-6xl mx-auto p-4 flex flex-col gap-3">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/colleges" onClick={() => setOpen(false)} className={linkClass}>For Colleges</NavLink>
            <NavLink to="/companies" onClick={() => setOpen(false)} className={linkClass}>For Companies</NavLink>
            <NavLink to="/students" onClick={() => setOpen(false)} className={linkClass}>For Students</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
            <NavLink to="/resources" onClick={() => setOpen(false)} className={linkClass}>Resources</NavLink>
            <div className="mt-2 flex gap-2">
              <button className="btn-ghost w-full font-medium">Login</button>
              <button className="btn-primary w-full">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
