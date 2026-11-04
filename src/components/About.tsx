import Reveal, { Eyebrow } from './Reveal'
const stats = [['9.35','MCA CGPA'],['9.11','BCA CGPA'],['2','Internship Experiences'],['3+','Projects']]
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><Eyebrow>About</Eyebrow><h2 className="h-big text-[clamp(2.5rem,7vw,5.5rem)]">More Than <span className="text-violet">Just Code.</span></h2></Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5 text-lg text-paper/80 leading-relaxed">
          <p>I'm Naman, an AI &amp; ML enthusiast with a strong foundation in programming, data analysis, and machine learning. I enjoy solving complex problems, experimenting with intelligent systems, and building applications that combine technology with creativity.</p>
          <p>When I am not in coding, I'm passionate about graphic design, photography, football, and singing. I believe the best ideas emerge when analytical thinking meets creative imagination.</p>
          <div className="flex flex-wrap gap-2 pt-2">{['MCA Student','AI/ML Enthusiast','Data Analyst','Creative Thinker'].map(t => <span key={t} className="rounded-full border border-line px-4 py-1.5 text-sm hover:border-lime hover:text-lime transition">{t}</span>)}</div>
          <p className="text-sm text-mute pt-2">MCA (AI &amp; ML), Galgotias University — 2027 · BCA, Trinity Institute of Professional Studies, GGSIPU — 2022–2025</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(([n, l], i) => <Reveal key={l} delay={i * .08}><div className={`rounded-3xl border border-line p-6 h-full ${i === 0 ? 'bg-lime text-ink' : 'bg-panel'}`}><div className="h-big text-5xl">{n}</div><div className={`mt-2 text-sm ${i === 0 ? 'text-ink/70' : 'text-mute'}`}>{l}</div></div></Reveal>)}
        </div>
      </div>
    </section>)
}
