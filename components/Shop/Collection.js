import React from 'react'

const Collection = () => {
  return (
    <div className='w-[90%] mx-auto my-24'>
        <h2 className='text-3xl font-semibold mb-6'>
            Collection Sales
        </h2>
        <div className='flex flex-col md:flex-row justify-evenly md:space-x-8 space-y-8 md:space-y-0'>
            <div className='women flex-1 py-36 pl-10 text-white text-4xl font-semibold'>
            50% off for women's <br /> summer t-shirts
            </div>
            <div className='men flex-1 py-36 pr-10 text-white text-4xl font-semibold text-right'>
            50% off for men's <br /> summer hoodies
            </div>
        </div>
    </div>
  )
}

export default Collection