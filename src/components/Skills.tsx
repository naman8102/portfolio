import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { Eyebrow } from './Reveal'
import { skills } from '../data/portfolio'
export default function Skills() {
  const cats = Object.keys(skills), [tab, setTab] = useState(cats[0])
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><Eyebrow>Skills</Eyebrow><h2 className="h-big text-[clamp(2.5rem,7vw,5.5rem)]">My <span className="text-lime">Toolkit.</span></h2></Reveal>
      <div role="tablist" className="mt-10 flex flex-wrap gap-2">
        {cats.map(c => <button key={c} role="tab" aria-selected={tab === c} onClick={() => setTab(c)} className="relative rounded-full px-5 py-2.5 font-display text-sm">
          {tab === c && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-lime" />}
          <span className={`relative ${tab === c ? 'text-ink font-bold' : 'text-mute hover:text-paper'}`}>{c}</span></button>)}
      </div>
      <div className="mt-8 min-h-48 rounded-3xl border border-line bg-panel p-6 sm:p-10">
        <AnimatePresence mode="wait"><motion.ul key={tab} className="flex flex-wrap gap-3" initial="h" animate="s" exit={{ opacity: 0 }} transition={{ staggerChildren: .06 }}>
          {skills[tab].map((s, i) => <motion.li key={s} variants={{ h: { opacity: 0, y: 20, scale: .9 }, s: { opacity: 1, y: 0, scale: 1 } }}
            whileHover={{ y: -6, rotate: i % 2 ? 3 : -3 }} className="cursor-default rounded-2xl border border-line bg-ink px-5 py-3 font-display text-lg sm:text-2xl hover:border-violet hover:text-violet">{s}</motion.li>)}
        </motion.ul></AnimatePresence>
      </div>
    </section>)
}
