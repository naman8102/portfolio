import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Mail, Phone, Copy, Check, Send } from 'lucide-react'
import Reveal, { Eyebrow } from './Reveal'
import { config } from '../data/portfolio'
export default function Contact() {
  const [copied, setCopied] = useState(false), [status, setStatus] = useState<'idle'|'sending'|'ok'|'err'|'unset'>('idle')
  const copy = async () => { try { await navigator.clipboard.writeText(config.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* ignore */ } }
  const submit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.currentTarget
  if (!config.formEndpoint) { setStatus('unset'); return }
  setStatus('sending')
  try {
    const r = await fetch(config.formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
    if (!r.ok) throw new Error('Request failed')
    setStatus('ok')
    form.reset()
  } catch { setStatus('err') }
}
  const f = 'w-full rounded-2xl border border-line bg-ink px-4 py-3 outline-none focus:border-lime'
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 overflow-hidden">
      <div aria-hidden className="absolute -z-10 top-10 right-0 h-96 w-96 rounded-full bg-violet/25 blur-[110px] float" />
      <Reveal><Eyebrow>Contact</Eyebrow><h2 className="h-big text-[clamp(2.5rem,7vw,5.5rem)]">Have an Idea? Let's Build <span className="text-lime">Something Cool.</span></h2>
        <p className="mt-6 max-w-xl text-lg text-mute">Whether it's an AI project, a creative collaboration, or an exciting opportunity, I'm always open to connecting.</p></Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal className="space-y-3">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-panel p-4"><Mail className="text-lime shrink-0" /><a href={`mailto:${config.email}`} className="truncate flex-1">{config.email}</a>
            <button onClick={copy} aria-label="Copy email" className="rounded-full border border-line p-2 hover:border-lime">{copied ? <Check size={16} className="text-lime" /> : <Copy size={16} />}</button></div>
          <a href={`tel:${config.phone}`} className="flex items-center gap-3 rounded-2xl border border-line bg-panel p-4 hover:border-lime"><Phone className="text-lime" />{config.phone}</a>
          <div className="flex gap-3 pt-2">
            <a href={config.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-line p-4 hover:bg-violet transition"><Linkedin /></a>
            <a href={config.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-line p-4 hover:bg-violet transition"><Github /></a></div>
        </Reveal>
        <Reveal delay={.1}>
          <form onSubmit={submit} className="space-y-3 rounded-3xl border border-line bg-panel p-6">
            <div className="grid gap-3 sm:grid-cols-2"><input className={f} name="name" placeholder="Name" aria-label="Name" required /><input className={f} type="email" name="email" placeholder="Email" aria-label="Email" required /></div>
            <input className={f} name="subject" placeholder="Subject" aria-label="Subject" required />
            <textarea className={f} name="message" rows={5} placeholder="Message" aria-label="Message" required />
            <button disabled={status === 'sending'} className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink hover:-translate-y-0.5 transition disabled:opacity-60"><Send size={16} />{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
            <p role="status" className="text-sm">
              {status === 'ok' && <span className="text-lime">Message sent — thank you!</span>}
              {status === 'err' && <span className="text-[#ff5d73]">Something went wrong. Please email me directly.</span>}
              {status === 'unset' && <span className="text-[#ffb86b]">The form isn't connected yet, so nothing was sent. Set VITE_FORM_ENDPOINT (e.g. a Formspree URL) in .env, or email me at {config.email}.</span>}
            </p>
          </form></Reveal>
      </div>
    </section>)
}
