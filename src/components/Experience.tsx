import { motion } from 'framer-motion'
import Reveal, { Eyebrow } from './Reveal'
import { experience } from '../data/portfolio'
export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-24">
      <Reveal><Eyebrow>Experience</Eyebrow><h2 className="h-big text-[clamp(2.5rem,7vw,5.5rem)]">Where I've <span className="text-lime">Worked.</span></h2></Reveal>
      <div className="relative mt-14 ml-3 border-l border-line pl-8 sm:pl-12 space-y-12">
        <motion.span aria-hidden className="absolute -left-px top-0 w-px bg-lime origin-top h-full" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }} />
        {experience.map((e, i) => <Reveal key={e.role} delay={i * .1}>
          <div className="relative"><span className="absolute -left-[2.55rem] sm:-left-[3.55rem] top-2 h-4 w-4 rounded-full bg-lime ring-4 ring-ink" />
            <p className="font-display text-sm text-violet">{e.date}</p>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold">{e.role}</h3>
            <p className="text-mute">{e.org}</p>
            <ul className="mt-4 space-y-2 text-paper/80">{e.points.map(p => <li key={p} className="flex gap-3"><span className="text-lime">▹</span>{p}</li>)}</ul></div></Reveal>)}
      </div>
    </section>)
}
