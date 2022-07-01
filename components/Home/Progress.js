import React from 'react'

const Progress = () => {
  return (
    <div>
        <div className='w-[90%] mx-auto my-12'> 
            <h6 className='text-[#650088] text-center md:text-left font-bold mb-4'>
                Our Progress
            </h6>
            <div className='flex  justify-between space-x-7'>
                <div className='flex-[2.3] '>
                    <h2 className='text-2xl text-center md:text-left md:text-4xl font-bold mb-10'>
                    Successful partnership with great <span className='underline decoration-yellow-500 decoration-4  '>brands</span>
                    </h2>
                    <p className='font-semibold text-center md:text-left text-xs md:text-lg md:w-[80%] mb-10 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime corrupti non provident ut, labore culpa est  incidunt tempore  eaque voluptates aspernatur! Ut similique dolores, mollitia vero blanditiis expedita dolor!
                    </p>
                    <div className='flex flex-col md:flex-row items-center md:items-start md:divide-x-2 divide-black md:space-x-6 space-y-8 md:space-y-0 mb-8'>
                        <div className='md:pl-6 text-center'>
                            <h2 className='text-3xl md:text-5xl font-bold mb-3'>
                                10+
                            </h2>
                            <p className='font-semibold'>
                                Years of Operation
                            </p>
                        </div>
                        <div className='md:pl-6 text-center'>
                            <h2 className='text-3xl md:text-5xl font-bold mb-3'>
                                120+
                            </h2>
                            <p className='font-semibold'>
                                Successful Projects
                            </p>
                        </div>
                        <div className='md:pl-6 text-center'>
                            <h2 className='text-3xl md:text-5xl font-bold mb-3'>
                                98+
                            </h2>
                            <p className='font-semibold'>
                                Happy Clients
                            </p>
                        </div>
                    </div>
                    <button className='bg-[#650088] hidden md:flex text-white text-sm font-semibold px-8 py-1.5 rounded-md hover:opacity-70  mb-10 md:mb-0'>
                        Know More
                    </button>
                </div>
                <div className='flex-1 hidden md:flex'>
                    <img src="./assets/images/progress.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress