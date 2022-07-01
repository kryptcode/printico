import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-[90%] mx-auto my-16 flex justify-between'>
        <div className='hidden md:flex flex-1'>
        <img src="./assets/images/new-balance.png"  alt="" />
        </div>
        <div className='flex-1 md:pt-10 text-center md:text-left'>
            <h6 className='text-[#f6b93b] md:text-xl font-semibold mb-3 md:mb-8 '>
            Subscribe to our newsletter
            </h6>
            <h2 className='text-xl md:text-4xl font-bold mb-6 md:mb-10'>
            Be The First To Know <br /> About Our New Collections.
            </h2>
            <div className='flex '>
                <input className='py-3 md:py-6 flex-grow font-semibold border-[1px] border-black border-r-0 pl-2 md:pl-6 outline-none ' type="text" placeholder='Enter Email Address' />
                <button className='py-3 md:py-6 px-6 md:px-10 bg-[#6a139f] text-white font-semibold '>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe