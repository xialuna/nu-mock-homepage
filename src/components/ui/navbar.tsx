'use client' // Required for Next.js App Router

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './button'
import { navLinks } from '@/data/navLinks'
import Image from 'next/image'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  // Smooth scroll
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault()
    setIsOpen(false)

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className='fixed left-0 top-0 z-10 w-full bg-primary/90'>
      <div className='lg:px-30 mx-auto px-4 sm:px-24'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <span className='flex items-center space-x-2 text-xl font-bold text-brand'>
              <Image src='/spotlight.svg' alt='NuWorks Logo' width={40} height={40} /> <p>NuWorks</p>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden space-x-9 font-semibold md:flex'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href.substring(2))} // Remove "/" and "#"
                className='cursor-pointer hover:text-brand'
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className='hidden space-x-3 md:flex'>
            <Button variant='secondary' size='small' className='py-0'>
              Join Us
            </Button>
            <Button size='small'>Contact Us</Button>
          </div>

          {/* Mobile Menu */}
          <div className='flex items-center md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='space-y-7 p-6 md:hidden'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href.substring(2))}
              className='block cursor-pointer pb-4 text-center text-xl hover:text-brand'
            >
              {link.label}
            </a>
          ))}

          <div className='flex flex-col space-y-2'>
            <Button variant='secondary' size='small'>
              Join Us
            </Button>
            <Button size='small'>Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
