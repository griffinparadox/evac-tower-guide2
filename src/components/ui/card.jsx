export function Card({ children }) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      {children}
    </div>
  )
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-6 ${className || ""}`}>
      {children}
    </div>
  )
}