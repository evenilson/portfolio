import { useLayoutEffect, useState } from 'react'

interface UseScrollPositionProvider {
  scrollPosition: number
}

export function useScrollPosition(): UseScrollPositionProvider {
  const [scrollPosition, setScrollPosition] = useState(0)
  useLayoutEffect(() => {
    function updatePosition() {
      setScrollPosition(Math.round(window.scrollY))
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])
  return { scrollPosition }
}
