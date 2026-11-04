import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
export const Eyebrow = ({ children }: { children: ReactNode }) =>
  <p className="font-display text-sm uppercase tracking-[0.25em] text-lime mb-4">/ {children}</p>
