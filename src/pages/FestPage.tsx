import {
  CalendarDays,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react"
import { Link, useParams } from "react-router"
import EventCard from "../components/EventCard"
import { Badge, EmptyState, LinkButton } from "../components/ui"
import { getDepartment, getFest, getFestEvents } from "../data/campusData"
import { festDateLabel } from "../lib/status"

export default function FestPage() {
  const { festId = "" } = useParams()
  const fest = getFest(festId)
  if (!fest)
    return (
      <div className="page container">
        <EmptyState
          title="Fest not found"
          description="This fest is not in the current campus directory."
          action={<LinkButton to="/fests">Browse all fests</LinkButton>}
        />
      </div>
    )
  const department = getDepartment(fest.departmentId)
  const festEvents = getFestEvents(fest.id)
  const categories = [...new Set(festEvents.map((event) => event.category))]

  return (
    <div className="page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/fests">Departments & Fests</Link>
          <ChevronRight size={14} />
          <span>{fest.name}</span>
        </nav>
        <section className={`fest-hero accent-${fest.accent}`}>
          <div>
            <p className="eyebrow">
              {fest.festType} · {department?.name}
            </p>
            <h1>{fest.name}</h1>
            <p>{fest.description}</p>
            <div className="tag-row">
              <Badge tone={fest.status === "Completed" ? "neutral" : "blue"}>
                {fest.status}
              </Badge>
              <span>{festEvents.length} events in catalogue</span>
            </div>
            {fest.startDate && (
              <div className="fest-date">
                <CalendarDays size={18} />
                <span>{festDateLabel(fest)}</span>
                <strong>Fest completed</strong>
              </div>
            )}
          </div>
          <div className="fest-monogram">{department?.shortName}</div>
        </section>
        <div className="catalogue-heading">
          <div>
            <p className="eyebrow">FEST CATALOGUE</p>
            <h2>Events under {fest.name}</h2>
          </div>
          {categories.length > 0 && (
            <div className="tag-row">
              <SlidersHorizontal size={17} />
              {categories.map((category) => (
                <Badge key={category}>{category}</Badge>
              ))}
            </div>
          )}
        </div>
        {festEvents.length ? (
          <div className="event-grid">
            {festEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No events have been added to this fest yet"
            description="Check back for updates. Event names and schedules will only appear after details are supplied and verified."
            action={
              <LinkButton to="/events" variant="secondary">
                Explore available events
              </LinkButton>
            }
          />
        )}
      </div>
    </div>
  )
}
