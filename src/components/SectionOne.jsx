import { PROJECTS } from '../constants/Assets'
import React from 'react'

const SectionOne = () => {
  return (
    <section className='container m-auto lg:p-20 p-10 bg-main-3'>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
    {PROJECTS.map((p) => (
              <div className='cursor-pointer hover:scale-105 transition-all'>
          <img
          className='rounded-2xl w-[600px]'
            src={p}
            alt='Photo'
/>
        </div>
    ))}
      </div>
    </section>
  )
}

export default SectionOne
