import React from 'react'

const OC = () => {
  return (
    <div className='my-32'>
        <div className='w-[90%] mx-auto '>
            <h1 className='text-[#650088] font-bold text-center md:text-left'>
                Our Capabilities
            </h1>

            <div className='flex justify-between space-x-24'>
                <div>
                    <h3 className='text-2xl md:text-4xl font-bold text-center md:text-left'>
                    Having attractive <span className='underline decoration-yellow-500 decoration-4  '>services</span> has never been <span className='underline decoration-yellow-500 decoration-4  '>easier</span>.
                    </h3>
                </div>

                <div className='text-lg hidden md:inline-block font-semibold '>
                PrintStudio is the preferred online printer of business cards, postcards, brochures, and other printed materials. We offer a variety of printing formats, each with their own customization options.
                </div>
            </div>

        </div>
    </div>
  )
}

export default OC