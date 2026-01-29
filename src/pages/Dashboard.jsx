import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"

const STORAGE_KEY = "talentyug_events_v1"
const emptyForm = { name: "", start: "", end: "" }

export default function Dashboard() {
  const navigate = useNavigate()

  const [events, setEvents] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)

  /* ---------- Load Events ---------- */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setEvents(JSON.parse(saved))
    } catch (e) {
      console.error("Failed to load events", e)
    }
  }, [])

  /* ---------- Save Events ---------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  }, [events])

  /* ---------- Modal Controls ---------- */
  const openModal = () => setIsModalOpen(true)

  const closeModal = () => {
    setIsModalOpen(false)
    setForm(emptyForm)
    setErrors({})
    setEditingId(null)
  }

  /* ---------- Submit ---------- */
  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Event name is required"
    if (!form.start) newErrors.start = "Start date is required"
    if (!form.end) newErrors.end = "End date is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (editingId) {
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === editingId ? { ...ev, ...form } : ev
        )
      )
    } else {
      setEvents((prev) => [
        { id: crypto.randomUUID(), ...form },
        ...prev,
      ])
    }

    closeModal()
  }

  /* ---------- Edit & Delete ---------- */
  const handleEdit = (event) => {
    setEditingId(event.id)
    setForm({
      name: event.name,
      start: event.start,
      end: event.end,
    })
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (!window.confirm("Delete this event?")) return
    setEvents((prev) => prev.filter((e) => e.id !== id))
  }

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })

  /* ---------- Render ---------- */
  return (
    <div className="min-h-screen bg-primary py-16 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <header>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Event Dashboard
          </h1>
          <p className="mt-3 text-slate-100/80">
            Create, edit and manage your placement events
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Create Card */}
          <div
            onClick={openModal}
            className="
              card cursor-pointer flex flex-col items-center
              justify-center gap-3 border-2 border-dashed
              hover:shadow-lg transition text-slate-900
            "
          >
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-3xl text-primary">
              +
            </div>
            <h3 className="font-semibold text-lg">
              Create New Event
            </h3>
            <p className="text-sm text-slate-500">
              Start a new placement drive
            </p>
          </div>

          {/* Empty State */}
          {events.length === 0 && (
            <div className="md:col-span-2 card flex items-center justify-center text-slate-600">
              No events yet. Create your first event.
            </div>
          )}

          {/* Event Cards */}
          {events.map((event) => (
            <div key={event.id} className="relative card text-slate-900">
              <div className="absolute top-4 right-4">
                <EventMenu
                  onEdit={() => handleEdit(event)}
                  onDelete={() => handleDelete(event.id)}
                />
              </div>

              <div className="space-y-4">
                <div className="text-sm text-slate-500">
                  {formatDate(event.start)}
                </div>

                <h3 className="text-xl font-semibold">
                  {event.name}
                </h3>

                <button
                  onClick={() => navigate(`/event/${event.id}`)}
                  className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold"
                >
                  Manage Event
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <EventModal
          form={form}
          setForm={setForm}
          errors={errors}
          onClose={closeModal}
          onSubmit={handleSubmit}
          isEditing={!!editingId}
        />
      )}
    </div>
  )
}

/* ======================================================
   Modal
====================================================== */

function EventModal({ form, setForm, errors, onClose, onSubmit, isEditing }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <form
        onSubmit={onSubmit}
        className="relative bg-white rounded-2xl w-full max-w-xl shadow-xl"
      >
        <div className="px-6 py-4 border-b flex justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            {isEditing ? "Edit Event" : "Create Event"}
          </h3>
          <button type="button" onClick={onClose}>✕</button>
        </div>

        <div className="p-6 space-y-4">
          <Input
            label="Event Name"
            placeholder="Tech Placement Drive 2025"
            value={form.name}
            error={errors.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Start Date"
              type="date"
              value={form.start}
              error={errors.start}
              onChange={(e) =>
                setForm({ ...form, start: e.target.value })
              }
            />
            <Input
              label="End Date"
              type="date"
              value={form.end}
              error={errors.end}
              onChange={(e) =>
                setForm({ ...form, end: e.target.value })
              }
            />
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 flex justify-end gap-3">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 rounded-lg"
          >
            {isEditing ? "Save Changes" : "Create Event"}
          </button>
        </div>
      </form>
    </div>
  )
}

/* ======================================================
   Menu
====================================================== */

function EventMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-slate-100"
      >
        ⋮
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
          <button
            onClick={() => {
              setOpen(false)
              onEdit()
            }}
            className="block w-full px-4 py-2 text-left hover:bg-slate-50"
          >
            Edit
          </button>
          <button
            onClick={() => {
              setOpen(false)
              onDelete()
            }}
            className="block w-full px-4 py-2 text-left text-rose-600 hover:bg-slate-50"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}
