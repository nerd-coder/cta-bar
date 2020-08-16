import { readable } from 'svelte/store'

interface ScrollInfo {
  x?: number
  y?: number
  up?: boolean
  down?: boolean
}

const getBodyOffset = () =>
  typeof window === 'undefined' || !window.document
    ? new DOMRect()
    : document.body.getBoundingClientRect()

export default function useScroll() {
  let prevInfo: ScrollInfo = {}
  return readable<ScrollInfo>({}, set => {
    const listener = () => {
      const bodyOffset = getBodyOffset()
      const info: ScrollInfo = { x: bodyOffset.left, y: -bodyOffset.top }
      info.up = info.y < prevInfo.y
      info.down = info.y > prevInfo.y
      set((prevInfo = info))
    }
    window.addEventListener('scroll', listener, { passive: true })
    return () => window.removeEventListener('scroll', listener)
  })
}

export const scroll = useScroll()
