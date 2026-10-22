import { ArrowUpRight, Cpu, Sparkles } from "lucide-react"
import type { Fest } from "../data/campusData"
import { getDepartment, getFestEvents } from "../data/campusData"
import { festDateLabel } from "../lib/status"
import { Badge, LinkButton } from "./ui"

export default function FestCard({ fest }: { fest: Fest }) {
  const department = getDepartment(fest.departmentId)
  const count = getFestEvents(fest.id).length
  return (
    <article className={`fest-card accent-${fest.accent}`}>
      <div className="fest-visual">
        <span>{department?.shortName}</span>
        {fest.id === "anvesham" ? <Sparkles size={28} /> : <Cpu size={28} />}
      </div>
      <div className="fest-card-body">
        <div className="fest-meta">
          <Badge tone={fest.status === "Completed" ? "neutral" : "blue"}>
            {fest.status}
          </Badge>
          <span>
            {count} {count === 1 ? "event" : "events"}
          </span>
        </div>
        <h3>{fest.name}</h3>
        <p className="department-label">{department?.name}</p>
        <p>{fest.description}</p>
        <div className="card-footer">
          <span>{fest.startDate ? festDateLabel(fest) : fest.festType}</span>
          <LinkButton to={`/fests/${fest.id}`} variant="secondary">
            Explore Events <ArrowUpRight size={17} />
          </LinkButton>
        </div>
      </div>
    </article>
  )
}
