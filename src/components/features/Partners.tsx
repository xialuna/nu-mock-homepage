import React from 'react'
import partners from '@/data/partners' // Import the correct partners data
import PyramidGrid from '../ui/pyramid-grid'
import TitleHeading from '../ui/title-heading'
import Button from '../ui/button'

const Partners: React.FC = () => {
  return (
    <div className='m-9'>
      <TitleHeading subtitle='Serving blue-chip clients in 19 growing sectors' title='Our Partners' />
      <PyramidGrid data={partners} />
      <Button variant='secondary' className='mx-auto'>
        View More
      </Button>
    </div>
  )
}

export default Partners
