import React from 'react'
import { cn } from '@/lib/utils'
import { TitleHeadingProps } from '@/types/heading'

const TitleHeading: React.FC<TitleHeadingProps> = ({ title, subtitle, align = 'center', className = '' }) => {
  const containerClasses = cn(`text-${align}`, className)

  return (
    <div className={containerClasses}>
      {subtitle && <h3 className='mb-2 text-xl font-semibold text-brand'>{subtitle}</h3>}
      <h2>{title}</h2>
    </div>
  )
}

export default TitleHeading
