import { EmptyState, LinkButton } from "../components/ui"

export default function NotFoundPage() {
  return (
    <div className="page container">
      <EmptyState
        title="Page not found"
        description="The page you requested does not exist in CampusConnect."
        action={<LinkButton to="/">Return home</LinkButton>}
      />
    </div>
  )
}
