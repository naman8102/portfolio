import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, FlaskConical } from 'lucide-react'
import Reveal, { Eyebrow } from './Reveal'
import { projects, type Project } from '../data/portfolio'
function Mockup({ p }: { p: Project }) {
  return <div className="relative h-52 overflow-hidden rounded-2xl border border-line" style={{ background: `radial-gradient(circle at 30% 20%, ${p.hue}55, #0b0b0d 70%)` }} aria-hidden>
    <div className="flex gap-1.5 p-3">{[0, 1, 2].map(i => <span key={i} className="h-2.5 w-2.5 rounded-full bg-paper/30" />)}</div>
    <div className="px-5 flex items-end gap-2 h-28">{[40, 70, 50, 90, 60, 100, 75].map((h, i) => <div key={i} className="flex-1 rounded-t-md transition-all duration-500 group-hover:opacity-100 opacity-70" style={{ height: `${h}%`, background: p.hue }} />)}</div>
    <span className="absolute bottom-3 left-5 font-display text-xs uppercase tracking-widest" style={{ color: p.hue }}>{p.short}</span>
  </div>
}
export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null)
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  const Links = ({ p }: { p: Project }) => <div className="flex flex-wrap gap-2">
    {p.github ? <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink hover:bg-lime"><Github size={16} />GitHub</a> : null}
    {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-violet px-4 py-2 text-sm font-semibold"><ExternalLink size={16} />Live Demo</a> : null}
    {p.status ? <span className="inline-flex items-center gap-2 rounded-full border border-lime/50 px-4 py-2 text-sm text-lime"><FlaskConical size={16} />{p.status}</span> : null}</div>
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><Eyebrow>Projects</Eyebrow><h2 className="h-big text-[clamp(2.5rem,7vw,5.5rem)]">Things I've <span className="text-violet">Built.</span></h2></Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => <Reveal key={p.title} delay={(i % 2) * .1} className={i === 0 ? 'md:col-span-2' : ''}>
          <article className="group rounded-3xl border border-line bg-panel p-4 transition hover:-translate-y-1 hover:border-lime/60 h-full">
            <button onClick={() => setSel(p)} className="block w-full text-left" aria-label={`Open details for ${p.title}`}><Mockup p={p} /></button>
            <div className="p-3 pt-5">
              <h3 className="font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-mute line-clamp-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map(t => <span key={t} className="rounded-full bg-ink px-3 py-1 text-xs text-paper/80">{t}</span>)}</div>
              <div className="mt-5 flex flex-wrap items-center gap-3"><Links p={p} /><button onClick={() => setSel(p)} className="text-sm text-lime underline-offset-4 hover:underline">Details →</button></div>
            </div></article></Reveal>)}
      </div>
      <AnimatePresence>{sel && (
        <motion.div className="fixed inset-0 z-[55] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
          <motion.div role="dialog" aria-modal aria-label={sel.title} onClick={e => e.stopPropagation()} initial={{ scale: .9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .9, y: 30 }}
            className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl border border-line bg-panel p-5 sm:p-8">
            <div className="flex justify-between gap-4"><h3 className="font-display text-3xl font-bold">{sel.title}</h3><button aria-label="Close" onClick={() => setSel(null)}><X /></button></div>
            <div className="mt-5"><Mockup p={sel} /></div>
            <p className="mt-5 leading-relaxed text-paper/80">{sel.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">{sel.tech.map(t => <span key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</span>)}</div>
            <div className="mt-6"><Links p={sel} /></div>
          </motion.div></motion.div>)}</AnimatePresence>
    </section>)
}
