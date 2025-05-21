import { useState } from "react"

export function Tabs({ value, onValueChange, children }) {
  return <div>{children}</div>
}

export function TabsList({ children }) {
  return <div className="inline-flex gap-2">{children}</div>
}

export function TabsTrigger({ value, children }) {
  return (
    <button
      className="rounded-md px-3 py-1 text-sm font-medium bg-gray-200 hover:bg-gray-300"
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children }) {
  return <div className="mt-4">{children}</div>
}