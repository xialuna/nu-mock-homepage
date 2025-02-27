import Button from './button'
import Image from 'next/image'
import { IconArrowRight } from '@tabler/icons-react'

export interface CaseStudyProps {
  title: string
  description: string
  year: string
  imageUrl: string
}

export function WorksContainer({ title, description, year, imageUrl }: CaseStudyProps) {
  return (
    <div className='relative h-[400px] overflow-hidden rounded-lg bg-tertiary p-4 transition-all hover:border-[6px] hover:border-brand/15'>
      <Image
        src={imageUrl || '/placeholder.svg'}
        alt={title}
        width={500}
        height={300}
        className='rounded-lg object-cover'
      />

      <div className='mb-1 mt-4 flex items-start justify-between'>
        <h3 className='text-mobile-2xl font-semibold md:text-2xl'>{title}</h3>
        <span className='text-mobile-xl md:text-xl'>{year}</span>
      </div>
      <p className='text-mobile-l md:text-l mb-5'>{description}</p>

      <Button variant='tertiary' size='medium' icon={<IconArrowRight />} className='absolute bottom-5'>
        View Case Study
      </Button>
    </div>
  )
}
