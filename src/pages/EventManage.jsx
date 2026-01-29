import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

/* ================= Utilities ================= */

const getFromStorage = (key, fallback = []) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

/* ================= Sparkline ================= */

function Sparkline({ data, width = 600, height = 160 }) {
  if (!data?.length) return null

  const max = Math.max(...data)
  const min = Math.min(...data)

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((v - min) / (max - min || 1)) * height
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <polyline
        fill="none"
        stroke="#a855f7"          /* violet → activity */
        strokeWidth="2"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  )
}

/* ================= Metric Card ================= */

function Metric({ title, value, subtitle, color, glow }) {
  return (
    <div
      className={`
        rounded-2xl p-6
        bg-gradient-to-b from-slate-800 to-slate-900
        border border-white/10
        ${glow}
      `}
    >
      <div className={`text-sm ${color}`}>{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
      {subtitle && (
        <div className="text-xs text-slate-400 mt-1">{subtitle}</div>
      )}
    </div>
  )
}

/* ================= Live Log ================= */

function LiveLog({ logs, onSimulate, onClear }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Live Scan Log</h3>
        <span className="text-xs text-emerald-400 flex items-center gap-1">
          ● Live
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-auto">
        {logs.length === 0 && (
          <p className="text-slate-500 text-sm text-center mt-6">
            No scans recorded yet.
          </p>
        )}

        {logs.map((log) => (
          <div
            key={log.id}
            className="flex justify-between items-center
                       bg-slate-800/60 rounded-lg p-3"
          >
            <div>
              <div className="font-medium">{log.name}</div>
              <div className="text-xs text-slate-400">
                {new Date(log.time).toLocaleTimeString()}
              </div>
            </div>

            <span
              className={`text-xs font-semibold ${
                log.status === "ok"
                  ? "text-emerald-400"
                  : log.status === "error"
                  ? "text-red-400"
                  : "text-amber-300"
              }`}
            >
              {log.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <button onClick={onSimulate} className="btn-primary">
          Simulate
        </button>
        <button onClick={onClear} className="btn-ghost">
          Clear
        </button>
      </div>
    </div>
  )
}

/* ================= Main ================= */

export default function EventManage() {
  const { id } = useParams()
  const LOG_KEY = `event_logs_${id}`

  const [logs, setLogs] = useState(() => getFromStorage(LOG_KEY))

  useEffect(() => {
    saveToStorage(LOG_KEY, logs)
  }, [logs, LOG_KEY])

  const stats = useMemo(() => {
    const total = logs.length
    const checkins = logs.filter((l) => l.status === "ok").length
    const issues = logs.filter((l) => l.status === "error").length
    return { total, checkins, issues }
  }, [logs])

  const hourlyData = useMemo(() => {
    const buckets = new Array(24).fill(0)
    const now = Date.now()

    logs.forEach((log) => {
      const diff = Math.floor(
        (now - new Date(log.time).getTime()) / 36e5
      )
      const idx = 23 - Math.min(Math.max(diff, 0), 23)
      buckets[idx]++
    })

    return buckets
  }, [logs])

  const simulateScan = () => {
    const statuses = ["ok", "ok", "error", "reentry"]
    const status = statuses[Math.floor(Math.random() * statuses.length)]

    setLogs((prev) => [
      {
        id: crypto.randomUUID(),
        name: `Guest ${Math.floor(Math.random() * 900 + 100)}`,
        time: new Date().toISOString(),
        status,
      },
      ...prev,
    ])
  }

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-10">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-slate-400">
              Real-time insights for your event
            </p>
          </div>

          <div className="text-sm text-emerald-400 flex items-center gap-2">
            ● Live Monitoring
          </div>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Metric
            title="Total Check-ins"
            value={stats.checkins}
            subtitle="Walk-ins"
            color="text-emerald-400"
            glow="shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          />

          <Metric
            title="Pre-Registered"
            value="0"
            subtitle="0% Arrived"
            color="text-sky-400"
            glow="shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          />

          <Metric
            title="Total Scans"
            value={stats.total}
            subtitle="Includes re-entries"
            color="text-violet-400"
            glow="shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          />

          <Metric
            title="Scan Issues"
            value={stats.issues}
            subtitle="Errors or Blocks"
            color="text-red-400"
            glow="shadow-[0_0_30px_rgba(239,68,68,0.15)]"
          />
        </div>

        {/* Activity */}
        <div className="rounded-2xl p-6
                        bg-gradient-to-b from-slate-800 to-slate-900
                        border border-white/10">
          <h3 className="font-semibold mb-4">
            Activity (Last 24 Hours)
          </h3>
          <div className="h-44">
            <Sparkline data={hourlyData} />
          </div>
        </div>

        {/* Bottom */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-slate-900 border border-white/10 p-6">
            <h3 className="font-semibold mb-4">Recently Assigned</h3>
            <div className="text-slate-500 text-sm text-center py-10">
              No guests assigned yet.
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-white/10 p-6">
            <LiveLog
              logs={logs}
              onSimulate={simulateScan}
              onClear={() => setLogs([])}
            />
          </div>
        </div>

        <div className="text-center text-xs text-slate-500">
          Powered by <span className="font-semibold">TalentYug</span>
        </div>
      </div>
    </div>
  )
}
