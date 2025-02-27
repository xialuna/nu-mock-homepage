import React from 'react'
import { awards } from '@/data/index' // Import the correct partners data
import PyramidGrid from '../ui/pyramid-grid'
import TitleHeading from '../ui/title-heading'
import Button from '../ui/button'

const Awards: React.FC = () => {
  return (
    <div className='m-16 pt-8'>
      <TitleHeading subtitle='Serving blue-chip clients in 19 growing sectors' title='Our Partners' />
      <PyramidGrid data={awards} />
      <Button variant='secondary' className='mx-auto'>
        View More
      </Button>
    </div>
  )
}

export default Awards
