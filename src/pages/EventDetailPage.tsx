import {
  Bookmark,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react"
import { Link, useParams } from "react-router"
import { useBookmarks } from "../context/BookmarksContext"
import { Badge, Button, EmptyState, LinkButton } from "../components/ui"
import { getDepartment, getEvent, getFest } from "../data/campusData"
import { deadlineLabel, formatDate } from "../lib/status"

export default function EventDetailPage() {
  const { eventId = "" } = useParams()
  const event = getEvent(eventId)
  const { isSaved, toggle } = useBookmarks()
  if (!event)
    return (
      <div className="page container">
        <EmptyState
          title="Event not found"
          description="This event is not in the current catalogue."
          action={<LinkButton to="/events">Discover events</LinkButton>}
        />
      </div>
    )
  const fest = getFest(event.festId)
  const department = getDepartment(event.departmentId)
  const saved = isSaved(event.id)
  const details = [
    {
      icon: CalendarDays,
      label: "Event date",
      value: formatDate(event.eventDate),
    },
    {
      icon: Clock3,
      label: "Registration deadline",
      value: deadlineLabel(event),
    },
    {
      icon: MapPin,
      label: "Venue / format",
      value: event.venue ?? event.format ?? "Awaiting details",
    },
    ...(event.format && event.venue
      ? [{ icon: Sparkles, label: "Format", value: event.format }]
      : []),
    {
      icon: Users,
      label: "Eligibility",
      value: event.eligibility ?? "Awaiting details",
    },
    {
      icon: ShieldCheck,
      label: "Organizing club",
      value: event.organizingClub ?? "Awaiting details",
    },
    ...(event.time
      ? [{ icon: Clock3, label: "Event time", value: event.time }]
      : []),
    ...(event.teamSize
      ? [{ icon: Users, label: "Team size", value: event.teamSize }]
      : []),
    ...(event.prizePool
      ? [{ icon: ShieldCheck, label: "Prize pool", value: event.prizePool }]
      : []),
    ...(event.tracks
      ? [{ icon: Sparkles, label: "Tracks", value: event.tracks.join(" · ") }]
      : []),
  ]
  return (
    <div className="page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/fests">Departments & Fests</Link>
          <ChevronRight size={14} />
          {fest && (
            <>
              <Link to={`/fests/${fest.id}`}>{fest.name}</Link>
              <ChevronRight size={14} />
            </>
          )}
          <span>{event.name}</span>
        </nav>
        <div className="detail-layout">
          <article className="detail-main">
            <div className="tag-row">
              <Badge tone="blue">{event.category}</Badge>
              <Badge>{event.status}</Badge>
            </div>
            <h1>{event.name}</h1>
            {event.theme && <p className="detail-theme">{event.theme}</p>}
            <p className="detail-lead">{event.description}</p>
            {event.poster && (
              <img
                className="detail-poster"
                src={event.poster}
                alt={event.posterAlt ?? `${event.name} event poster`}
              />
            )}
            <div className="organizer-strip">
              <div>
                <span>Department</span>
                <strong>{department?.name}</strong>
              </div>
              <div>
                <span>Associated fest</span>
                {fest ? (
                  <Link to={`/fests/${fest.id}`}>{fest.name}</Link>
                ) : (
                  <strong>Standalone event</strong>
                )}
              </div>
              <div>
                <span>Organizing club</span>
                <strong>{event.organizingClub ?? "Awaiting details"}</strong>
              </div>
            </div>
            <section className="detail-section">
              <h2>Event information</h2>
              <div className="detail-grid">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label}>
                    <Icon size={20} />
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </section>
            {event.targetParticipants && (
              <section className="detail-section">
                <h2>Who should participate</h2>
                <p>{event.targetParticipants}</p>
              </section>
            )}
            {event.rounds && (
              <section className="detail-section">
                <h2>Rounds</h2>
                <div className="detail-grid">
                  {event.rounds.map((round) => (
                    <div key={round.name}>
                      <Sparkles size={20} />
                      <span>{round.name}</span>
                      <strong>{round.detail}</strong>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {event.trackDetails && (
              <section className="detail-section">
                <h2>Challenge tracks</h2>
                <div className="track-grid">
                  {event.trackDetails.map((track, index) => (
                    <article key={track.name} className="track-card">
                      <span>
                        Track {index + 1}: {track.name}
                      </span>
                      <h3>{track.title}</h3>
                      <p>{track.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
            {event.prizes && (
              <section className="detail-section">
                <h2>Prize distribution</h2>
                <div className="detail-grid">
                  {event.prizes.map((prize) => (
                    <div key={prize.place}>
                      <Trophy size={20} />
                      <span>{prize.place}</span>
                      <strong>{prize.amount}</strong>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {event.contacts && (
              <section className="detail-section">
                <h2>Organizer contacts</h2>
                <div className="detail-grid">
                  {event.contacts.map((contact) => (
                    <div key={contact.name}>
                      <Phone size={20} />
                      <span>{contact.name}</span>
                      <strong>
                        <a href={`tel:+91${contact.phone}`}>{contact.phone}</a>
                      </strong>
                    </div>
                  ))}
                </div>
              </section>
            )}
            <section className="detail-section">
              <h2>Rules & instructions</h2>
              <p>
                {event.note ??
                  "Rules and instructions have not yet been supplied by the organizer."}
              </p>
            </section>
          </article>
          <aside className="registration-card">
            <p className="eyebrow">
              {event.status === "Completed" ? "EVENT ARCHIVE" : "REGISTRATION"}
            </p>
            <h2>{deadlineLabel(event)}</h2>
            <p>
              {event.status === "Completed"
                ? "ANANTYA ’26 took place on 9–10 October 2026. This event has been completed."
                : event.registrationUrl
                  ? "Continue to the organizer’s official registration page."
                  : "An official registration link has not been supplied for this event."}
            </p>
            {event.status === "Completed" ? null : event.registrationUrl ? (
              <a
                className="btn btn-primary btn-full"
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
              >
                {event.registrationPlatform === "Unstop"
                  ? "Register on Unstop"
                  : "Register officially"}{" "}
                <ExternalLink size={17} />
              </a>
            ) : (
              <Button disabled className="btn-full">
                Registration link unavailable
              </Button>
            )}
            <Button
              variant="secondary"
              className="btn-full"
              onClick={() => toggle(event.id)}
            >
              {saved ? <Check size={18} /> : <Bookmark size={18} />}
              {saved ? "Saved on this device" : "Save event"}
            </Button>
            <small>
              Saving is personal to this browser and does not complete
              registration.
            </small>
          </aside>
        </div>
      </div>
    </div>
  )
}
