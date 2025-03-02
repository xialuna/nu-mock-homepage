import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between border-t border-white/5 py-7'>
      <div>
        <div className='flex items-center'>
          <span className='flex items-center space-x-2 text-xl font-bold text-brand'>
            <Image src='/spotlight.svg' alt='NuWorks Logo' width={40} height={40} /> <p>NuWorks</p>
          </span>
        </div>
        <p className='md:text-l text-mobile-l'>Copyright 2025. NuWorks Interactive Labs, Inc. All rights reserved.</p>
      </div>
      <div className='flex items-center justify-center gap-5 text-brand'>
        <a href='https://www.instagram.com/nuworksph' target='_blank' rel='noopener noreferrer'>
          <Image src='/socials/instagram.svg' alt='Instagram' width={30} height={30} />
        </a>
        <a href='https://www.facebook.com/nuworks' target='_blank' rel='noopener noreferrer'>
          <Image src='/socials/facebook.svg' alt='Facebook' width={30} height={30} />
        </a>
        <a href='https://www.linkedin.com/company/nuworksph' target='_blank' rel='noopener noreferrer'>
          <Image src='/socials/linkedin.svg' alt='LinkedIn' width={30} height={30} />
        </a>
      </div>
    </div>
  )
}

export default Footer
