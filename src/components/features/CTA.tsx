import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'

function CTA() {
  return (
    <div className='container mx-auto px-4 py-24'>
      <div
        className='relative flex min-h-[306px] flex-col items-center justify-center rounded-xl bg-cover bg-center md:flex-row'
        style={{ backgroundImage: "url('/NUFooter.png')" }} // ✅ Using inline style for reliability
      >
        {/* Mobile Image (Hidden on Desktop) */}
        <Image
          src='https://nuworks.ph/static/images/NUMobileFooter.png'
          alt='be-one'
          width={300}
          height={300}
          className='w-full rounded-xl md:hidden'
        />

        {/* Shared Text Content */}
        <div className='relative my-5 max-w-3xl px-4 py-6 text-center text-white md:absolute md:left-14 md:px-0 md:text-left'>
          <span className='text-mobile-xl font-semibold text-brand md:text-xl'>Careers</span>
          <h2 className='mb-2'>Looking for Innovators, Be One of Us</h2>
          <p className='text-mobile-xl mb-5 md:text-xl'>
            Unlock potential beyond your career path with brave work that intersects data, creativity, and tech. Join us
            in the Innovations Agency!
          </p>
          <Button className='mx-auto md:mx-0'>Join Us</Button>
        </div>
      </div>
    </div>
  )
}

export default CTA
