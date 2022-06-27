import React from 'react'

const About = () => {
  return (
    <div className='my-24'>
        <div className='flex w-[90%] mx-auto flex-col md:flex-row'>
            <div className='flex-[1.5] pt-2'>
                <h6 className='text-[#650088] font-semibold text-sm mb-7 text-center md:text-left'>About Us</h6>
                <h3 className='text-3xl md:text-[2.5rem] mb-10 leading-none font-bold text-center md:text-left' >
                A brief history about our <br />  <span className='underline decoration-yellow-500 decoration-4  '>
                printing house
                </span>
                </h3>
                <p className='mb-6 font-semibold text-lg md:w-[70%] '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora rem dicta sequi accusantium ab quisquam.
                </p>
                <p className='mb-6 font-semibold text-lg md:w-[70%] '>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis! Ducimus at asperiores nihil dignissimos?
                </p>
                <button className='bg-[#650088] text-white text-sm font-semibold px-8 py-1.5 rounded-md hover:opacity-70  mb-10 md:mb-0'>
                    About Us
                </button>
            </div>

            <div className='flex-1 '>
            <img src="./assets/images/about.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About