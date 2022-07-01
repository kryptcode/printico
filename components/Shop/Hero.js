import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-[90%] mx-auto flex justify-between my-12 h-[24rem] md:h-auto'>
        <div className='z-20 text-5xl md:text-[5.2rem] font-black text-[#6a139f] uppercase leading-none '>
            The Best <br /> <span>custom <br /> items</span>
        </div>
        <div className='hidden md:flex flex-col justify-between items-end md:h-[55rem] '>
            <div className=' text-lg font-semibold text-[#6a139f] mr-16'>
            Find your perfect merch <br /> that will fit for any occasion.
            </div>
            <div className='h-24 w-[16rem] bg-[#6a139f] ' />
        </div>
        <img src="./assets/images/shop-hero.png" className='absolute top-12 md:top-[5.7rem] right-0 md:right-16' alt="" />
        <div className='h-24 w-[10rem] bg-[#6a139f] md:hidden absolute bottom-0 right-0 -z-10' />
    </div>
  )
}

export default Hero