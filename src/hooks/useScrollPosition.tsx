import { useLayoutEffect, useState } from 'react';


interface UseScrollPositionProvider {
  scrollPosition: number
}

export default function useScrollPosition(): UseScrollPositionProvider {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(parseInt(window.scrollY.toString()));
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return { scrollPosition };
}