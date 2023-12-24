'use client'
import React from 'react'

const Hero = () => {
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl'>
            <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
                <h2 className='text-md text-indigo-500 tracking-widest font-medium title-font mb-1 px-3 py-4 rounded-full bg-yellow-400'>
                    FAN VENTNIG AFFAIR
                </h2>
                <h1 className='title-font text-center sm:text-8xl text-7xl mb-4 font-medium text-gray-900'>
                The Place Where A Fan Can Be A Fan
                </h1>
                <p className='text-center mb-8 leading-relaxed'>
                    The Home Of Passionate Fans!
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero