import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react"
import { Link, type LinkProps } from "react-router"
import { Search } from "lucide-react"

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
}) {
  return <button className={`btn btn-${variant} ${className}`} {...props} />
}

export function LinkButton({
  variant = "primary",
  className = "",
  ...props
}: LinkProps & { variant?: "primary" | "secondary" | "ghost" }) {
  return <Link className={`btn btn-${variant} ${className}`} {...props} />
}

export function SearchInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`search-field ${className}`}>
      <Search size={18} aria-hidden="true" />
      <span className="sr-only">Search</span>
      <input {...props} />
    </label>
  )
}

export function Select({
  label,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  children: ReactNode
}) {
  return (
    <label className="select-field">
      <span className="sr-only">{label}</span>
      <select {...props}>{children}</select>
    </label>
  )
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "neutral" | "blue" | "teal" | "amber"
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description: string
  action?: ReactNode
}) {
  return (
    <div className="empty-state">
      <div className="empty-icon">CC</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {action}
    </div>
  )
}
