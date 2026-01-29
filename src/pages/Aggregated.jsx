import React, { useMemo } from "react"
import { Link } from "react-router-dom"

/* ======================================================
   Storage Helpers
====================================================== */

const EVENT_LOG_PREFIX = "event_logs_"

function getAllEventLogs() {
  const result = {}

  Object.keys(localStorage).forEach((key) => {
    if (!key.startsWith(EVENT_LOG_PREFIX)) return

    try {
      const eventId = key.replace(EVENT_LOG_PREFIX, "")
      const logs = JSON.parse(localStorage.getItem(key) || "[]")
      result[eventId] = Array.isArray(logs) ? logs : []
    } catch (err) {
      console.warn(`Failed to parse logs for ${key}`, err)
    }
  })

  return result
}

/* ======================================================
   Main Component
====================================================== */

export default function Aggregated() {
  const events = useMemo(getAllEventLogs, [])

  const aggregates = useMemo(() => {
    let totalScans = 0
    let totalCheckins = 0
    let totalErrors = 0

    const perEventStats = Object.entries(events).map(
      ([eventId, logs]) => {
        const scans = logs.length
        const checkins = logs.filter((l) => l.status === "ok").length
        const errors = logs.filter((l) => l.status === "error").length

        totalScans += scans
        totalCheckins += checkins
        totalErrors += errors

        return { eventId, scans, checkins, errors }
      }
    )

    return {
      totalScans,
      totalCheckins,
      totalErrors,
      perEventStats,
    }
  }, [events])

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Aggregated Dashboard
            </h1>
            <p className="text-slate-400">
              Insights across all events
            </p>
          </div>

          <Link
            to="/dashboard"
            className="text-slate-300 hover:underline"
          >
            ← Back
          </Link>
        </header>

        {/* Summary */}
        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <Metric title="Total Scans" value={aggregates.totalScans} />
          <Metric
            title="Total Check-ins"
            value={aggregates.totalCheckins}
          />
          <Metric
            title="Total Issues"
            value={aggregates.totalErrors}
            danger
          />
        </section>

        {/* Per Event */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4">
            Per-event Breakdown
          </h3>

          {aggregates.perEventStats.length === 0 ? (
            <p className="text-slate-400">
              No event data available.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {aggregates.perEventStats.map((event) => (
                <EventRow key={event.eventId} {...event} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

/* ======================================================
   UI Components
====================================================== */

function Metric({ title, value, danger }) {
  return (
    <div className="card bg-slate-800">
      <p
        className={`text-sm ${
          danger ? "text-rose-400" : "text-slate-400"
        }`}
      >
        {title}
      </p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}

function EventRow({ eventId, scans, checkins, errors }) {
  return (
    <div className="card bg-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">Event: {eventId}</p>
          <p className="text-sm text-slate-400 mt-1">
            {scans} scans • {checkins} check-ins • {errors} issues
          </p>
        </div>

        <Link
          to={`/event/${eventId}`}
          className="btn-ghost"
        >
          Open
        </Link>
      </div>
    </div>
  )
}
