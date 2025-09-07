import { doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from '@/lib/firebase'

export function useViewCounter() {
  const [views, setViews] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    const SESSION_KEY = 'viewed-portfolio-session'
    const ref = doc(db, 'metrics', 'portfolio')

    void (async () => {
      try {
        const snap = await getDoc(ref)
        if (!snap.exists()) {
          await setDoc(ref, { views: 0 })
        }

        if (!sessionStorage.getItem(SESSION_KEY)) {
          sessionStorage.setItem(SESSION_KEY, '1') // guard
          if (import.meta.env.PROD) {
            try {
              await updateDoc(ref, { views: increment(1) })
            } catch (e) {
              sessionStorage.removeItem(SESSION_KEY)
              throw e
            }
          }
        }

        const fresh = await getDoc(ref)
        if (alive) setViews((fresh.data()?.views as number | undefined) ?? 0)
      } finally {
        if (alive) setLoading(false)
      }
    })()

    return () => {
      alive = false
    }
  }, [])

  return { views, loading }
}
