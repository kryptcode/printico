import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='bg-[#650088] text-white py-16'>
            <div className='w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center md:items-left text-center md:text-left justify-between gap-y-12 md:gap-y-0'>
                <h1 className='text-4xl font-bold'>
                    PrintIco
                </h1>
                <div className='font-semibold'>
                    <p className='mb-4'>
                        Lorem ipsum dolor <br /> sit amet consectetur adipisicing <br /> elit. Dolores, veritatis!
                    </p>
                    <p>
                        Monday - Saturday : 8AM -5PM
                    </p>
                </div>
                <div className='font-semibold'>
                    Lorem ipsum dolor sit.
                </div>
            </div>
        </div>  
        <div className='w-[90%] mx-auto text-[#650088] text-sm font-semibold my-7'>
        Copyright 2022 Printico Group. All Rights Reserved    
        </div> 
    </>
  )
}

export default Footer