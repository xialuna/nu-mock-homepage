import React from 'react'
import Button from './button'
import { IconArrowRight } from '@tabler/icons-react'
import { CardProps } from '@/types/cards'

const Card: React.FC<CardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className='flex flex-col items-start justify-between rounded-xl border border-brand/20 bg-tertiary px-6 py-8 transition-all hover:border-2 hover:border-brand hover:bg-secondary'>
      <div>
        <img src={iconSrc} alt={title} className='w-fit' />
        <h3 className='text-mobile-2xl mt-3 font-semibold md:text-2xl'>{title}</h3>
        <p className='text-mobile-m md:text-m mb-4 mt-2'>{description}</p>
      </div>
      <Button variant='tertiary' size='medium' icon={<IconArrowRight />}>
        Know More
      </Button>
    </div>
  )
}

export default Card
