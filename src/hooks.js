import { useEffect } from "react"

export function useWindowEvent(event, handler, deps, immediate = true) {
  return useEffect(() => {
    immediate && setTimeout(handler, 50)
    window.addEventListener(event, handler)
    return () => window.removeEventListener(event, handler)
  }, [event, handler, immediate, ...deps])
}
