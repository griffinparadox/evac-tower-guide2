export function Button({ children, className = "", variant = "default" }) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ring-ring ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}