import React from "react"

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-slate-50 text-slate-900
          placeholder-slate-400
          border
          ${error ? "border-rose-400" : "border-slate-200"}
          focus:outline-none focus:ring-2
          ${error ? "focus:ring-rose-400" : "focus:ring-primary"}
        `}
      />

      {error && (
        <p className="text-sm text-rose-500">{error}</p>
      )}
    </div>
  )
}
