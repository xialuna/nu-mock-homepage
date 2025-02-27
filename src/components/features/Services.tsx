import React from 'react'
import TitleHeading from '../ui/title-heading'
import Button from '../ui/button'
import Card from '../ui/card'
import { services } from '@/data/index'

const Services = () => {
  return (
    <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.5fr] md:gap-4'>
      <div>
        <TitleHeading subtitle='View our works that stand out' title='Our Services' className='text-start' />
        <p className='text-mobile-xl pb-12 pt-5 md:text-xl'>
          NuWorks builds, operates, and deploys digital services to help brands and businesses scale in the digital
          economy. This is made possible through StoryTeching: the process by which we utilize our end-to-end digital
          capabilities in content, commerce, customer experience, performance marketing, app dev, and martech.
        </p>
        <Button variant='secondary' className='mt-0 md:mt-4'>
          View All Services
        </Button>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {services.map((service, index) => (
          <Card key={index} iconSrc={service.iconSrc} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  )
}
export default Services
