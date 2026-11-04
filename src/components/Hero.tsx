import { motion } from 'framer-motion'
import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { config } from '../data/portfolio'
const nodes = [[60,60],[60,150],[60,240],[170,40],[170,115],[170,190],[170,265],[280,80],[280,170],[280,250],[380,150]]
const links = nodes.flatMap((a, i) => nodes.map((b, j) => (a[0] < b[0] && b[0] - a[0] < 130 && (i + j) % 2 === 0 ? [a, b] : null)).filter(Boolean) as number[][][])
const chips = [['AI / ML','top-2 left-0','#c6ff3d'],['Python','top-16 right-0','#8b5cf6'],['Data Analytics','bottom-24 -left-2','#38bdf8'],['Creative Thinker','bottom-6 right-2','#ff5d73']]
export default function Hero() {
  const word = (t: string, d: number) => <motion.span className="inline-block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: d, duration: .8, ease: [.22,1,.36,1] }}>{t}&nbsp;</motion.span>
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-5 overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-violet/30 blur-[120px]" />
      <div aria-hidden className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-lime/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr] w-full">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-line bg-panel px-4 py-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-lime" style={{ animation: 'pulse-dot 1.6s infinite' }} />Open to opportunities
            <span className="text-mute flex items-center gap-1"><MapPin size={14} />{config.location}</span>
          </div>
          <h1 className="h-big text-[clamp(3rem,9vw,7rem)]">
            <span className="block overflow-hidden">{word('Hey,', 0.1)}{word("I'm", 0.2)}</span>
            <span className="block overflow-hidden text-lime">{word('Naman', 0.3)}{word('Singh.', 0.4)}</span>
          </h1>
          <p className="mt-6 font-display text-xl sm:text-2xl max-w-xl">Building intelligent solutions with AI, ML &amp; a little <span className="text-violet">creative chaos.</span></p>
          <p className="mt-4 max-w-xl text-mute leading-relaxed">I'm an MCA student specializing in Artificial Intelligence &amp; Machine Learning, passionate about transforming data into intelligent applications and ideas into impactful digital experiences.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5">Explore My Work <ArrowUpRight className="transition group-hover:rotate-45" size={18} /></a>
            <a href="#contact" className="rounded-full border border-paper/30 px-6 py-3 font-semibold transition hover:border-violet hover:bg-violet/20">Let's Connect</a>
            <a href={config.resume} download="Naman_Singh_Resume.pdf" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-mute hover:text-lime transition"><Download size={18} />Download Resume</a>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <svg viewBox="0 0 440 300" className="absolute inset-0 h-full w-full opacity-60" aria-hidden>
            {links.map(([a, b], i) => <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#8b5cf6" strokeOpacity=".5" strokeDasharray="4 6" style={{ animation: 'dash 3s linear infinite' }} />)}
            {nodes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 3 ? 5 : 8} fill={i % 3 ? '#c6ff3d' : '#8b5cf6'} />)}
          </svg>
          <div className="absolute inset-[18%] rotate-3 overflow-hidden rounded-[2rem] border-2 border-lime bg-panel shadow-[0_0_60px_-10px_#c6ff3d66]">
            {config.photo ? <img src={config.photo} alt="Naman Singh" className="h-full w-full object-cover" loading="eager" />
              : <div className="grid h-full w-full place-items-center bg-gradient-to-br from-violet/40 to-ink"><span className="h-big text-7xl text-lime">NS</span><span className="absolute bottom-3 text-xs text-mute">photo placeholder</span></div>}
          </div>
          {chips.map(([t, pos, c], i) => <span key={t} className={`float absolute ${pos} rounded-full border bg-ink/90 px-4 py-2 text-sm font-display font-bold backdrop-blur`} style={{ borderColor: c, color: c, animationDelay: `${i * .8}s`, ['--r' as string]: `${i % 2 ? 4 : -4}deg` }}>{t}</span>)}
        </div>
      </div>
    </section>)
}
