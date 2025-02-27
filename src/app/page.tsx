import CTA from '@/components/features/CTA'
import Hero from '@/components/features/Hero'
import Services from '@/components/features/Services'
import { Values } from '@/components/features/Values'
import Works from '@/components/features/Works'
import NavBar from '@/components/ui/navbar'

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div>
        <section id='hero'>
          <Hero />
        </section>
        <section id='values'>
          <Values />
        </section>
        <section id='works'>
          <Works />
        </section>
        <section id='services'>
          <Services />
        </section>
        <section id='cta'>
          <CTA />
        </section>
      </div>
    </>
  )
}
