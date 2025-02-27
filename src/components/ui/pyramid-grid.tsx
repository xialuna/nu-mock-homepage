import React from 'react'
import Image from 'next/image'
import { PyramidGridProps, DisplayImg } from '@/types/pyramidGrid'

const PyramidGrid: React.FC<PyramidGridProps> = ({ data, rowStructure }) => {
  const defaultRowStructure = {
    sm: [3, 3, 2, 1], // Small screens
    md: [4, 3, 3], // Medium screens
    lg: [6, 5, 4, 1] // Large screens (default)
  }

  return (
    <div className='m-10 flex flex-col items-center gap-4'>
      {/* Large Screens */}
      <div className='hidden flex-col items-center gap-4 lg:flex'>
        {renderRows(data, rowStructure || defaultRowStructure.lg)}
      </div>

      {/* Medium Screens */}
      <div className='hidden flex-col items-center gap-4 md:flex lg:hidden'>
        {renderRows(data, rowStructure || defaultRowStructure.md)}
      </div>

      {/* Small Screens */}
      <div className='flex flex-col items-center gap-4 md:hidden'>
        {renderRows(data, rowStructure || defaultRowStructure.sm)}
      </div>
    </div>
  )
}

const renderRows = (data: DisplayImg[], rowStructure: number[]) => {
  let startIndex = 0
  return rowStructure.map((cols, rowIndex) => {
    const rowImages = data.slice(startIndex, startIndex + cols)
    startIndex += cols

    return (
      <div key={rowIndex} className='flex w-full justify-center gap-2 sm:gap-4'>
        {rowImages.map((displayImg, index) => (
          <div
            key={index}
            className='flex h-[100px] w-[120px] items-center justify-center rounded-md sm:h-[120px] sm:w-[150px]'
          >
            <Image
              src={displayImg.logo}
              alt={displayImg.name}
              width={100}
              height={100}
              className='max-h-[80%] max-w-[80%] object-contain'
            />
          </div>
        ))}
      </div>
    )
  })
}

export default PyramidGrid
