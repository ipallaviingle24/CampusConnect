import { BookmarkX, CalendarDays } from "lucide-react"
import EventCard from "../components/EventCard"
import { EmptyState, LinkButton, SectionHeading } from "../components/ui"
import { useBookmarks } from "../context/BookmarksContext"
import { events } from "../data/campusData"

export default function CalendarPage() {
  const { savedIds } = useBookmarks()
  const saved = events
    .filter((event) => savedIds.includes(event.id))
    .sort((a, b) =>
      (a.eventDate ?? "9999").localeCompare(b.eventDate ?? "9999"),
    )
  return (
    <div className="page">
      <div className="container">
        <SectionHeading
          eyebrow="MY CALENDAR"
          title="Your saved opportunities"
          description="A chronological shortlist stored on this device. Saved does not mean registered."
        />
        <div className="local-notice">
          <CalendarDays size={20} />
          <p>
            <strong>Local prototype storage:</strong> these bookmarks are not
            shared with other students or synced to an account.
          </p>
        </div>
        {saved.length ? (
          <div className="event-grid">
            {saved.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Your shortlist is empty"
            description="Save an event to keep it here for later reference."
            action={<LinkButton to="/events">Discover events</LinkButton>}
          />
        )}
        {saved.length > 0 &&
          saved.every((event) => event.status === "Completed") && (
            <div className="compact-empty">
              <BookmarkX size={21} />
              <div>
                <strong>No upcoming saved events</strong>
                <p>
                  Your current bookmarks are historical. New verified
                  opportunities will sort by event date.
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}
