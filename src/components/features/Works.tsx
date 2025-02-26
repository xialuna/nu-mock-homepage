import React from 'react'
import TitleHeading from '../ui/title-heading'
import { WorksContainer } from '../ui/works-container'
import { works } from '@/data/index'

const Works = () => {
  return (
    <div>
      <TitleHeading subtitle='View our works that stands out' title='Our Works' className='m-20' />
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {works.map((work, index) => (
          <WorksContainer
            key={index}
            title={work.title}
            description={work.description}
            year={work.year}
            imageUrl={work.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Works
