import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/portfolio'
const id = (s: string) => s.toLowerCase()
export default function Navbar() {
  const [active, setActive] = useState('home'), [open, setOpen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(n => { const el = document.getElementById(id(n)); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ type: 'spring', damping: 20 }}
      className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-6xl">
      <nav aria-label="Primary" className="flex items-center justify-between rounded-full border border-line bg-ink/80 backdrop-blur-xl px-5 py-3">
        <a href="#home" className="font-display font-bold text-lg">Naman<span className="text-lime"></span>Singh</a>
        <ul className="hidden lg:flex gap-1">
          {nav.map(n => <li key={n}><a href={`#${id(n)}`} className={`rounded-full px-3 py-1.5 text-sm transition ${active === id(n) ? 'bg-lime text-ink font-semibold' : 'text-mute hover:text-paper'}`}>{n}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="rounded-full bg-violet px-4 py-2 text-sm font-semibold hover:scale-105 transition">Let's Talk</a>
          <button className="lg:hidden p-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence>{open && (
        <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="lg:hidden mt-2 rounded-3xl border border-line bg-ink/95 backdrop-blur-xl p-3">
          {nav.map(n => <li key={n}><a onClick={() => setOpen(false)} href={`#${id(n)}`} className="block rounded-xl px-4 py-3 text-lg font-display hover:bg-panel">{n}</a></li>)}
        </motion.ul>)}
      </AnimatePresence>
    </motion.header>)
}
