import React from 'react'
import TitleHeading from '../ui/title-heading'
import { WorksContainer } from '../ui/works-container'

const Works = () => {
  return (
    <div>
      <TitleHeading subtitle='View our works that stands out' title='Our Works' className='m-20' />
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <WorksContainer
          title='Grab Food Indie Eats Boogsh! Sarap.'
          description='Catapulting small merchants from undiscovered to discovered'
          year='2014'
          imageUrl='https://nuworks.ph/file/uploads/thumbnail/Grab_Indie_Eats_Boogsh_Sarap_-_Thumbnail.png'
        />
      </div>
    </div>
  )
}

export default Works
