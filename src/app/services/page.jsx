
import Branding from '@/components/Branding'
import ServicesSection from '@/components/Digital'
import Legal from '@/components/Legal'
import Software from '@/components/Software'
import React from 'react'

function page() {
  return (
    <div className='mt-40'>
        <div className='snap-start'>
        <h1 className=" text-6xl font-bold mb-4 mx-auto px-6 lg:px-24 ">
      <span className="text-stone-400">Services</span>
      </h1>
        </div>

        <div className='snap-center'>
          <ServicesSection/>
        </div>

        <div className='snap-center'>
          <Legal/>
        </div>

        <div className='snap-center'>
          <Software/>
        </div>
        
        <div className='snap-center'>
          <Branding/>
        </div>
        
    </div>
  )
}

export default page