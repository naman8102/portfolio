import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { config } from '../data/portfolio'
export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left"><p className="font-display font-bold">Designed &amp; Built by Naman Singh</p><p className="text-sm text-mute">Turning ideas into intelligent experiences.</p></div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href={config.github} target="_blank" rel="noreferrer" className="p-2 hover:text-lime"><Github /></a>
          <a aria-label="LinkedIn" href={config.linkedin} target="_blank" rel="noreferrer" className="p-2 hover:text-lime"><Linkedin /></a>
          <a aria-label="Email" href={`mailto:${config.email}`} className="p-2 hover:text-lime"><Mail /></a>
          <a href="#home" className="ml-2 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-lime">Back to top <ArrowUp size={14} /></a></div>
      </div></footer>)
}
