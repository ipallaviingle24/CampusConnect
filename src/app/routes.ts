import { createBrowserRouter } from "react-router"
import Layout from "../components/Layout"
import CalendarPage from "../pages/CalendarPage"
import EventDetailPage from "../pages/EventDetailPage"
import EventsPage from "../pages/EventsPage"
import FestPage from "../pages/FestPage"
import FestsPage from "../pages/FestsPage"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "fests", Component: FestsPage },
      { path: "fests/:festId", Component: FestPage },
      { path: "events", Component: EventsPage },
      { path: "events/:eventId", Component: EventDetailPage },
      { path: "calendar", Component: CalendarPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
