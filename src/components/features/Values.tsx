import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import TitleHeading from '../ui/title-heading'
import { values } from '@/data/index'

export function Values() {
  return (
    <div>
      <TitleHeading subtitle='What we value in our company' title='Our Values' className='m-10' />

      <BentoGrid className='mx-auto max-w-[60rem] md:auto-rows-[22rem]'>
        {values.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.class}
          />
        ))}
      </BentoGrid>
    </div>
  )
}
