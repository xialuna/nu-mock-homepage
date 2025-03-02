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
    <div className='group relative flex flex-col overflow-hidden rounded-lg bg-tertiary p-4 transition-all duration-300 hover:scale-105 hover:border-[6px] hover:border-brand/15'>
      <Image
        src={imageUrl || '/placeholder.svg'}
        alt={title}
        width={500}
        height={300}
        className='w-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105'
      />

      <div className='mt-4 flex flex-col space-y-2'>
        <div className='flex items-center justify-between'>
          <h3 className='text-mobile-2xl font-semibold md:text-2xl'>{title}</h3>
          <span className='text-mobile-xl md:text-xl'>{year}</span>
        </div>
      </div>
      <p className='md:text-l mb-5 text-mobile-l'>{description}</p>
      <div className='mt-auto pt-4'>
        <Button variant='tertiary' size='medium' icon={<IconArrowRight />} className='w-full md:w-auto'>
          View Case Study
        </Button>
      </div>
    </div>
  )
}
