import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <div className='my-32 '>
        <div className='w-[65%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-12 '>
            <Service img='./assets/images/services-1.svg' text='Projects' />
            <Service img='./assets/images/scanner.svg' text='Scanning' />
            <Service img='./assets/images/xerox.svg' text='Xerographic' />
            <Service img='./assets/images/paper.svg' text='Printing On Paper' />
            <Service img='./assets/images/3d-print.svg' text='3D Printing' />
            <Service img='./assets/images/mug.svg' text='Printing On Gadgets' />
        </div>

        <div className=' md:w-[65%] mt-16 mx-auto flex flex-col md:flex-row items-center justify-between'>
            <div className='text-lg font-semibold hidden md:inline-block'>
            And <span className='text-[#650088]'>14 more</span> services. Check them
            </div>
            <button className='bg-[#650088] text-white text-sm font-semibold px-8 py-1.5 rounded-md hover:opacity-70  mb-10 md:mb-0'>
                All Services
            </button>
        </div>
    </div>
  )
}

export default Services