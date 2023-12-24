'use client'
import React from 'react'

const Hero = () => {
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl'>
            <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
                <h2 className='text-md text-indigo-500 tracking-widest font-medium title-font mb-8 px-3 py-4 rounded-full bg-yellow-400'>
                   The Sport Adicts Your Online Fan Venting Hub
                </h2>
                <h1 className='title-font text-center sm:text-8xl text-7xl mb-4 font-medium text-gray-900'>
                The Place Where A Fan Can Be A Fan
                </h1>
                <p className='text-center mb-8 leading-relaxed'>
                    The Home Of Passionate Fans!
                </p>
                <button
                className='px-6 text-xl py-8 rounded-full bg-gray-300'
                >Join The Crowd</button>
            </div>
        </div>
    </section>
  )
}

export default Hero