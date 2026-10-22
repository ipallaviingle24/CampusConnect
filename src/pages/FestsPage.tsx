import EventCard from "../components/EventCard"
import FestCard from "../components/FestCard"
import { SectionHeading } from "../components/ui"
import { departments, events, fests, getFestEvents } from "../data/campusData"

export default function FestsPage() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeading
          eyebrow="DEPARTMENTS & FESTS"
          title="Find opportunities by academic community"
          description="Each department has its own section. Fests such as ANANTYA and ANVESHAM sit inside their department as separate sub-sections, with their own event catalogues."
        />
        {departments.map((department) => {
          const departmentFests = fests.filter(
            (fest) => fest.departmentId === department.id,
          )
          const departmentEvents = events.filter(
            (event) =>
              event.departmentId === department.id &&
              !event.festId &&
              event.status !== "Completed",
          )
          return (
            <section
              key={department.id}
              className="department-section"
              aria-labelledby={`department-${department.id}`}
            >
              <p className="eyebrow">DEPARTMENT</p>
              <h2 id={`department-${department.id}`}>{department.name}</h2>

              {departmentEvents.length > 0 && (
                <div className="sub-section">
                  <h3 className="sub-section-title">Department events</h3>
                  <div className="event-grid">
                    {departmentEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              )}

              {departmentFests.map((fest) => {
                const festEvents = getFestEvents(fest.id)
                return (
                  <div
                    key={fest.id}
                    className="sub-section"
                    aria-label={`${fest.name} section`}
                  >
                    <h3 className="sub-section-title">{fest.name}</h3>
                    <div className="fest-grid">
                      <FestCard fest={fest} />
                    </div>
                    {festEvents.length > 0 && (
                      <div className="event-grid sub-section-events">
                        {festEvents.map((event) => (
                          <EventCard key={event.id} event={event} />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </section>
          )
        })}
      </div>
    </div>
  )
}
