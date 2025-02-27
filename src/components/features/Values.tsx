import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import TitleHeading from '../ui/title-heading'
// import { values } from '@/data/index'

export function Values() {
  return (
    <div className='mt-32 md:mt-6'>
      <TitleHeading subtitle='What we value in our company' title='Our Values' className='m-10' />

      <BentoGrid className='mx-auto max-w-[60rem] md:auto-rows-[22rem]'>
        {values.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

// Put here because className won't work if it's on another file
const values = [
  {
    title: 'Be Brave For Good',
    description: 'Brave is venturing into the unknown. It is our standard of excellence that delivers results.',
    header: 'https://nuworks.ph/static/images/logo/Right%20hand%201%201.png',
    className: 'md:col-span-1'
  },
  {
    title: 'Lead the Change',
    description:
      'Keep asking, keep exploring, keep pushing. Show the way in designing and building all things imaginable. Learn, unlearn, grow and continue to reinvent who we are, what we do, and how we do it.',
    header: 'https://nuworks.ph/static/images/logo/Right%20hand%201%202.png',
    className: 'md:col-span-2'
  },
  {
    title: 'Trust & Be Trustworthy',
    description:
      'Work with trust. Have faith in your team, clients, and partners. In the same way, work to be trustworthy. Be responsible.',
    header: 'https://nuworks.ph/static/images/logo/Right%20hand%201%203.png',
    className: 'md:col-span-1'
  },
  {
    title: 'Be Customer Centric',
    description:
      'Grow what grows us. Strive to be the best version of yourself so we always deliver the most value to our customers. Their success is our success.',
    header: 'https://nuworks.ph/static/images/logo/Right%20hand%201%204.png',
    className: 'md:col-span-1'
  },
  {
    title: 'Be Better Together',
    description:
      'Collaboration is successful when diverse minds work. With great passion, respect, empathy, commitment, and a lot of fun we can achieve more as a team.',
    header: 'https://nuworks.ph/static/images/logo/Right%20hand%201%205.png',
    className: 'md:col-span-1'
  }
]
