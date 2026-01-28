import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white/90 mt-12">
      <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="text-2xl font-bold text-primary">TalentYug</div>
          <div className="text-sm text-slate-600 mt-2">Placement infrastructure for Tier 2/3 colleges</div>
        </div>
        <div className="flex gap-8">
          <div>
            <div className="font-semibold">Product</div>
            <div className="text-sm text-slate-600">Home</div>
            <div className="text-sm text-slate-600">Resources</div>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <div className="text-sm text-slate-600">About</div>
            <div className="text-sm text-slate-600">Contact</div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 py-4">© 2025 TalentYug — All rights reserved</div>
    </footer>
  )
}
