import Awards from '@/components/features/Awards'
import Contact from '@/components/features/Contact'
import CTA from '@/components/features/CTA'
import Hero from '@/components/features/Hero'
import Partners from '@/components/features/Partners'
import Services from '@/components/features/Services'
import { Values } from '@/components/features/Values'
import Works from '@/components/features/Works'
import Footer from '@/components/ui/footer'
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
        <section id='partners'>
          <Partners />
        </section>
        <section id='awards'>
          <Awards />
        </section>
        <section>
          <Contact />
        </section>
        <section id='cta'>
          <CTA />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
