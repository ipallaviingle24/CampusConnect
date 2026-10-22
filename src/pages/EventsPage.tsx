import { useMemo, useState } from "react"
import { useSearchParams } from "react-router"
import EventCard from "../components/EventCard"
import {
  Button,
  EmptyState,
  SearchInput,
  SectionHeading,
  Select,
} from "../components/ui"
import { departments, events, fests } from "../data/campusData"

export default function EventsPage() {
  const [params] = useSearchParams()
  const [query, setQuery] = useState(params.get("q") ?? "")
  const [department, setDepartment] = useState("all")
  const [category, setCategory] = useState("all")
  const [status, setStatus] = useState("all")
  const [fest, setFest] = useState("all")
  const categories = [...new Set(events.map((event) => event.category))]

  const filtered = useMemo(
    () =>
      events.filter((event) => {
        const currentFest = fests.find((item) => item.id === event.festId)
        const haystack = [
          event.name,
          event.description,
          event.organizingDepartment,
          event.organizingClub,
          event.category,
          currentFest?.name,
        ]
          .join(" ")
          .toLowerCase()
        return (
          haystack.includes(query.toLowerCase()) &&
          (department === "all" || event.departmentId === department) &&
          (category === "all" || event.category === category) &&
          (status === "all" || event.status === status) &&
          (fest === "all" || event.festId === fest)
        )
      }),
    [query, department, category, status, fest],
  )

  function reset() {
    setQuery("")
    setDepartment("all")
    setCategory("all")
    setStatus("all")
    setFest("all")
  }

  return (
    <div className="page">
      <div className="container">
        <SectionHeading
          eyebrow="DISCOVER EVENTS"
          title="Search the campus, not the group chat"
          description="Combine search, department, fest, category, and status filters to find relevant events."
        />
        <div className="filter-bar">
          <SearchInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, fest, category, organizer..."
          />
          <Select
            label="Filter by department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="all">All departments</option>
            {departments.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
          <Select
            label="Filter by fest"
            value={fest}
            onChange={(event) => setFest(event.target.value)}
          >
            <option value="all">All fests</option>
            {fests.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
          <Select
            label="Filter by category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Select
            label="Filter by status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="all">All statuses</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
            <option value="Details Awaited">Details awaited</option>
          </Select>
          <Button variant="ghost" onClick={reset}>
            Reset filters
          </Button>
        </div>
        <p className="result-count">
          {filtered.length} {filtered.length === 1 ? "event" : "events"} found
        </p>
        {filtered.length ? (
          <div className="event-grid">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No events match these filters"
            description="Try removing a filter or using a broader search term."
            action={<Button onClick={reset}>Clear filters</Button>}
          />
        )}
      </div>
    </div>
  )
}
