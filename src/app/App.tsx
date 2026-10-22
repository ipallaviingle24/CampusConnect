import { RouterProvider } from "react-router"
import { BookmarksProvider } from "../context/BookmarksContext"
import { router } from "./routes"

export default function App() {
  return (
    <BookmarksProvider>
      <RouterProvider router={router} />
    </BookmarksProvider>
  )
}
