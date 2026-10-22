import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"
import { useState } from "react"
import EventCard from "../components/EventCard"
import FestCard from "../components/FestCard"
import { LinkButton, SearchInput, SectionHeading } from "../components/ui"
import { events, fests } from "../data/campusData"

export default function HomePage() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  function submitSearch(event: React.FormEvent) {
    event.preventDefault()
    navigate(
      `/events${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`,
    )
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">PCCOE CAMPUS DIRECTORY</p>
            <h1>
              Never Miss an <span>Opportunity</span> on Campus.
            </h1>
            <p>
              Discover college fests, competitions, workshops and student
              opportunities — all in one place.
            </p>
            <form className="hero-search" onSubmit={submitSearch}>
              <SearchInput
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search events, fests, departments..."
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
            <div className="hero-actions">
              <LinkButton to="/events">
                Explore Events <ArrowRight size={18} />
              </LinkButton>
              <LinkButton to="/fests" variant="secondary">
                Browse Departments
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="EXPLORE THE CAMPUS"
            title="Browse by department & fest"
            description="Start with a department, then open its fest to discover the events connected to it."
          />
          <LinkButton to="/fests" variant="ghost">
            View all fests <ArrowRight size={17} />
          </LinkButton>
        </div>
        <div className="fest-grid home-fest-grid">
          {fests.slice(0, 3).map((fest) => (
            <FestCard key={fest.id} fest={fest} />
          ))}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="heading-row">
            <SectionHeading
              eyebrow="EVENT CATALOGUE"
              title="Featured events"
              description="Known events are shown with historical status and only the details currently supplied."
            />
            <LinkButton to="/events" variant="ghost">
              Discover all <ArrowRight size={17} />
            </LinkButton>
          </div>
          <div className="event-grid">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
