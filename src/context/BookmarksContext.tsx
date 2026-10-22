import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type BookmarksValue = {
  savedIds: string[]
  toggle: (id: string) => void
  isSaved: (id: string) => boolean
}

const BookmarksContext = createContext<BookmarksValue | null>(null)
const storageKey = "campusconnect-saved-events"

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) ?? "[]")
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(savedIds))
  }, [savedIds])

  const value = useMemo(
    () => ({
      savedIds,
      toggle: (id: string) =>
        setSavedIds((current) =>
          current.includes(id)
            ? current.filter((item) => item !== id)
            : [...current, id],
        ),
      isSaved: (id: string) => savedIds.includes(id),
    }),
    [savedIds],
  )

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const value = useContext(BookmarksContext)
  if (!value)
    throw new Error("useBookmarks must be used inside BookmarksProvider")
  return value
}
