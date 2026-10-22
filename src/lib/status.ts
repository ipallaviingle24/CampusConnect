import type { CampusEvent, Fest } from "../data/campusData"

const day = 1000 * 60 * 60 * 24

export function formatDate(value?: string) {
  if (!value) return "Awaiting details"
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`))
}

export function deadlineLabel(event: CampusEvent) {
  if (event.status === "Completed") return "Event completed"
  if (!event.registrationDeadline) return "Deadline awaited"
  const deadline = new Date(`${event.registrationDeadline}T23:59:59`).getTime()
  const diff = Math.ceil((deadline - Date.now()) / day)
  if (diff < 0) return "Registration closed"
  if (diff === 0) return "Closes today"
  if (diff === 1) return "1 day left"
  if (diff <= 7) return `${diff} days left`
  return `Closes ${formatDate(event.registrationDeadline)}`
}

export function festDateLabel(fest: Fest) {
  if (!fest.startDate) return "Dates awaiting details"
  if (!fest.endDate || fest.startDate === fest.endDate)
    return formatDate(fest.startDate)

  const start = new Date(`${fest.startDate}T12:00:00`)
  const end = new Date(`${fest.endDate}T12:00:00`)
  const month = new Intl.DateTimeFormat("en-IN", { month: "short" }).format(end)
  return `${start.getDate()}–${end.getDate()} ${month} ${end.getFullYear()}`
}

export function isClosingSoon(event: CampusEvent) {
  if (!event.registrationDeadline || event.status === "Completed") return false
  const diff =
    (new Date(`${event.registrationDeadline}T23:59:59`).getTime() -
      Date.now()) /
    day
  return diff >= 0 && diff <= 7
}
