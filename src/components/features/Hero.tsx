'use client'
import React, { useState } from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Button from '../ui/button'

// Lazy load React Modal for better performance
const Modal = dynamic(() => import('react-modal'), { ssr: false })

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <ContainerScroll
        titleComponent={
          <>
            <div className='flex flex-col gap-7 p-20'>
              <h1 className='text-mobile-heading-3xl font-semibold md:text-heading-3xl'>
                <span className='text-brand'>Tech-Forward</span> Integrated Solutions for your Brand
              </h1>
              <p className='md:mobile-l text-xl'>
                We are an independent agency, we&#39;ve grown into one of the Philippines&#39; largest full-suite
                advertising and innovation firms, offering a robust portfolio of technology-driven marketing services.
              </p>
              <div className='flex justify-center gap-4'>
                <Button className='px-14'>Join Us</Button>
                <Button variant='secondary'>Learn More</Button>
              </div>
            </div>
          </>
        }
      >
        {/* Clickable Image to Open Video Modal */}
        <Image
          src={`/banner.svg`}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto h-full cursor-pointer rounded-2xl object-cover object-center'
          draggable={false}
          onClick={() => setModalIsOpen(true)}
        />
      </ContainerScroll>

      {/* Video Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel='Video Modal'
        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'
        ariaHideApp={false}
      >
        <div className='relative w-full max-w-4xl'>
          <button
            onClick={() => setModalIsOpen(false)}
            className='absolute -right-4 -top-4 rounded-full bg-white px-3 py-1 text-lg font-bold text-black'
          >
            ✕
          </button>
          <iframe
            width='100%'
            height='500'
            src='https://www.youtube.com/embed/lU_ytGp00NU?si=IVHIX8_2370KAGxu'
            title='YouTube Video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='rounded-lg'
          ></iframe>
        </div>
      </Modal>
    </div>
  )
}

export default Hero
