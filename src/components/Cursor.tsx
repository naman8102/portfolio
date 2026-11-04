import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
export default function Cursor() {
  const [on, setOn] = useState(false)
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 400, damping: 30 }), sy = useSpring(y, { stiffness: 400, damping: 30 })
  useEffect(() => {
    const ok = matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!ok) return
    setOn(true); document.body.classList.add('cursor-on')
    const m = (e: MouseEvent) => { x.set(e.clientX - 14); y.set(e.clientY - 14) }
    addEventListener('mousemove', m)
    return () => { removeEventListener('mousemove', m); document.body.classList.remove('cursor-on') }
  }, [x, y])
  if (!on) return null
  return <motion.div aria-hidden style={{ x: sx, y: sy }} className="fixed top-0 left-0 z-[70] h-7 w-7 rounded-full border border-lime mix-blend-difference pointer-events-none" />
}
