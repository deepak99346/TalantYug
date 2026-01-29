import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ForColleges from './pages/ForColleges'
import ForCompanies from './pages/ForCompanies'
import ForStudents from './pages/ForStudents'
import About from './pages/About'
import Resources from './pages/Resources'
import Dashboard from './pages/Dashboard'
import EventManage from './pages/EventManage'
import Aggregated from './pages/Aggregated'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/colleges" element={<ForColleges/>} />
          <Route path="/companies" element={<ForCompanies/>} />
          <Route path="/students" element={<ForStudents/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/event/:id" element={<EventManage/>} />
          <Route path="/aggregated" element={<Aggregated/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
