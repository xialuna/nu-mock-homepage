import React from 'react'
import Image from 'next/image'
import { PyramidGridProps } from '@/types/pyramidGrid'

const PyramidGrid: React.FC<PyramidGridProps> = ({ data, rowStructure = [6, 5, 4, 1] }) => {
  let startIndex = 0

  return (
    <div className='m-10 flex flex-col items-center gap-4'>
      {rowStructure.map((cols, rowIndex) => {
        const rowImages = data.slice(startIndex, startIndex + cols)
        startIndex += cols

        return (
          <div key={rowIndex} className='flex w-full justify-center gap-4'>
            {rowImages.map((displayImg, index) => (
              <div key={index} className='flex h-[120px] w-[150px] items-center justify-center rounded-md shadow-md'>
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
      })}
    </div>
  )
}

export default PyramidGrid
