import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='container relative flex flex-col items-center justify-center gap-8 py-32'>
      <Image src='/glow.svg' alt='blur' width={800} height={300} className='absolute -z-50 w-full' />
      <div className='px-0 text-center xl:px-60'>
        <h2>
          Create Brave Work with <span className='text-brand'>NuWorks</span>
        </h2>
        <p className='mt-3 text-mobile-2xl md:text-2xl'>
          Brave work not only makes your brand or offering stand out, but also gives it the potential to go beyond.
          Interested? Let&#39;s work together!
        </p>
      </div>
      <Button>Let&#39;s Connect</Button>
    </div>
  )
}

export default Contact
