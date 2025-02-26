import React from 'react'
import TitleHeading from '../ui/title-heading'
import { WorksContainer } from '../ui/works-container'
import { works } from '@/data/index'
import Button from '../ui/button'

const Works = () => {
  return (
    <div>
      <TitleHeading subtitle='View our works that stands out' title='Our Works' className='mb-10 mt-20' />
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

      <Button variant='secondary' className='m-16 mx-auto'>
        View More
      </Button>
    </div>
  )
}

export default Works
