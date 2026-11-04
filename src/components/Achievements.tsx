import { Award } from 'lucide-react'
import Reveal, { Eyebrow } from './Reveal'
import { achievements, leadership } from '../data/portfolio'
export default function Achievements() {
  const row = [...leadership, ...leadership]
  return (<>
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><Eyebrow>Achievements</Eyebrow><h2 className="h-big text-[clamp(2.5rem,7vw,5.5rem)]">Certs &amp; <span className="text-violet">Badges.</span></h2></Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => <Reveal key={a} delay={(i % 3) * .08}>
          <div className="group h-full rounded-3xl border border-line bg-panel p-6 transition hover:-rotate-1 hover:border-lime">
            <Award className="text-lime transition group-hover:scale-125" /><p className="mt-4 font-display text-lg leading-snug">{a}</p></div></Reveal>)}
      </div>
    </section>
    <section aria-labelledby="lead" className="py-24 overflow-hidden bg-lime text-ink -rotate-1 my-10">
      <div className="mx-auto max-w-6xl px-5 rotate-1">
        <Reveal><h2 id="lead" className="h-big text-[clamp(2.2rem,6vw,5rem)]">Code Is My Logic.<br />Creativity Is My Superpower.</h2></Reveal>
        <ul className="mt-8 flex flex-wrap gap-3">{leadership.map((l, i) => <li key={l} className={`rounded-full border-2 border-ink px-5 py-2 font-display font-bold ${i % 2 ? 'bg-ink text-lime' : 'bg-transparent'}`} style={{ transform: `rotate(${(i % 3 - 1) * 2}deg)` }}>{l}</li>)}</ul>
      </div>
      <div aria-hidden className="mt-10 flex w-max gap-10 font-display text-4xl font-bold whitespace-nowrap opacity-30" style={{ animation: 'marquee 30s linear infinite' }}>{row.map((l, i) => <span key={i}>{l} ✦</span>)}</div>
    </section></>)
}
