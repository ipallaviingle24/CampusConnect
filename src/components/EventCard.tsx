import {
  Bookmark,
  Calendar,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Trophy,
} from "lucide-react"
import type { CampusEvent } from "../data/campusData"
import { getFest } from "../data/campusData"
import { useBookmarks } from "../context/BookmarksContext"
import { deadlineLabel, formatDate } from "../lib/status"
import { Badge, Button, LinkButton } from "./ui"

export default function EventCard({ event }: { event: CampusEvent }) {
  const { isSaved, toggle } = useBookmarks()
  const saved = isSaved(event.id)
  const fest = getFest(event.festId)
  return (
    <article className="event-card">
      {event.poster && (
        <img
          className="event-poster"
          src={event.poster}
          alt={event.posterAlt ?? `${event.name} event poster`}
          loading="lazy"
        />
      )}
      <div className="event-card-top">
        <Badge tone="blue">{event.category}</Badge>
        <Button
          variant="ghost"
          className={saved ? "bookmark-button is-saved" : "bookmark-button"}
          onClick={() => toggle(event.id)}
          aria-label={
            saved
              ? `Remove ${event.name} from saved events`
              : `Save ${event.name}`
          }
        >
          {saved ? <Check size={18} /> : <Bookmark size={18} />}
        </Button>
      </div>
      <h3>{event.name}</h3>
      <p className="event-path">
        {event.organizingDepartment} <ChevronRight size={14} />{" "}
        {fest?.name ?? event.organizingClub ?? "Department event"}
      </p>
      <p>{event.description}</p>
      <dl className="event-facts">
        <div>
          <Calendar size={17} />
          <dt>Event date</dt>
          <dd>{formatDate(event.eventDate)}</dd>
        </div>
        <div>
          <Clock3 size={17} />
          <dt>Registration</dt>
          <dd>{deadlineLabel(event)}</dd>
        </div>
        <div>
          <MapPin size={17} />
          <dt>Venue</dt>
          <dd>{event.venue ?? "Awaiting details"}</dd>
        </div>
        {event.prizePool && (
          <div>
            <Trophy size={17} />
            <dt>Prize pool</dt>
            <dd>{event.prizePool}</dd>
          </div>
        )}
      </dl>
      <div className="card-footer">
        <Badge tone={event.status === "Completed" ? "neutral" : "teal"}>
          {event.status}
        </Badge>
        <div className="card-actions">
          {event.status !== "Completed" && event.registrationUrl && (
            <a
              className="btn btn-primary"
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Register now
            </a>
          )}
          <LinkButton to={`/events/${event.id}`} variant="ghost">
            View details{" "}
            <ChevronRight size={17} />
          </LinkButton>
        </div>
      </div>
    </article>
  )
}
