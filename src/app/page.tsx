import CTA from '@/components/features/CTA'
import Hero from '@/components/features/Hero'
import { Values } from '@/components/features/Values'
import Works from '@/components/features/Works'

export default function Home() {
  return (
    <div>
      <Hero />
      <Values />
      <Works />
      <CTA />
    </div>
  )
}
