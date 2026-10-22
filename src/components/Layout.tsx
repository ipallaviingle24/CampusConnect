import { useState } from "react"
import {
  Bookmark,
  CalendarDays,
  Menu,
  Search,
  UserRound,
  X,
} from "lucide-react"
import { Link, NavLink, Outlet } from "react-router"
import { Button } from "./ui"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Departments & Fests", to: "/fests" },
  { label: "Discover Events", to: "/events" },
  { label: "My Calendar", to: "/calendar" },
]

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <span className="brand-mark">C</span>
            <span>
              Campus<span>Connect</span>
            </span>
          </Link>
          <nav
            className={open ? "main-nav is-open" : "main-nav"}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <Link
              to="/events"
              className="icon-button"
              aria-label="Search events"
            >
              <Search size={19} />
            </Link>
            <Link
              to="/calendar"
              className="profile-chip"
              aria-label="Open demo profile and saved events"
            >
              <UserRound size={18} /> <span>Demo Profile</span>
            </Link>
            <Button
              className="menu-button"
              variant="ghost"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container footer-grid">
          <div>
            <Link className="brand brand-light" to="/">
              <span className="brand-mark">C</span> CampusConnect
            </Link>
            <p>Your Campus. Your Opportunities. One Place.</p>
          </div>
          <div className="footer-note">
            <Bookmark size={18} />
            <p>
              Bookmarks are saved only on this device. Saving an event does not
              register you for it.
            </p>
          </div>
          <div className="footer-note">
            <CalendarDays size={18} />
            <p>
              A student prototype for PCCOE. Verify details with official
              organizers before participating.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
