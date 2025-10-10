import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
  initialIsIntersecting?: boolean
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<Element>
  entry: IntersectionObserverEntry | undefined
  isIntersecting: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
    initialIsIntersecting = false,
  } = options

  const ref = useRef<Element>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setEntry(entry)
        setIsIntersecting(entry.isIntersecting)

        // If freezeOnceVisible is true and element is visible, stop observing
        if (freezeOnceVisible && entry.isIntersecting) {
          observer.unobserve(node)
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    )

    observer.observe(node)

    return () => {
      observer.unobserve(node)
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return { ref, entry, isIntersecting }
}

// Hook for multiple elements
export const useIntersectionObserverMultiple = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
  } = options

  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])
  const [node, setNode] = useState<Element | null>(null)

  useEffect(() => {
    if (!node) return

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        setEntries(entries)
      },
      {
        threshold,
        root,
        rootMargin,
      }
    )

    observer.observe(node)

    return () => {
      observer.unobserve(node)
    }
  }, [node, threshold, root, rootMargin])

  return { setNode, entries }
}

// Hook for scroll-based animations
export const useScrollAnimation = (
  triggerPoint: number = 0.5,
  options: UseIntersectionObserverOptions = {}
) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: triggerPoint,
    freezeOnceVisible: true,
    ...options,
  })

  return { ref, isVisible: isIntersecting }
}

// Hook for lazy loading images
export const useLazyLoading = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  return { ref, isLoaded: isIntersecting }
}

// Hook for infinite scroll
export const useInfiniteScroll = (
  callback: () => void,
  options: UseIntersectionObserverOptions = {}
) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    ...options,
  })

  useEffect(() => {
    if (isIntersecting) {
      callback()
    }
  }, [isIntersecting, callback])

  return { ref }
}

// Hook for progress tracking
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return scrollProgress
}

// Hook for element visibility percentage
export const useVisibilityPercentage = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [visibilityPercentage, setVisibilityPercentage] = useState(0)

  const { ref, entry } = useIntersectionObserver({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    ...options,
  })

  useEffect(() => {
    if (entry) {
      setVisibilityPercentage(Math.round(entry.intersectionRatio * 100))
    }
  }, [entry])

  return { ref, visibilityPercentage }
}
