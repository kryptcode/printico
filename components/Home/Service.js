import React from 'react'

const Service = ({ img ,text }) => {
  return (
    <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-0  md:flex-row md:space-x-4'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h5 className='text-lg md:text-2xl font-bold text-[#650088] mb-2 '>
                {text}
            </h5>
            <p className='font-semibold text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, veritatis.
            </p>
        </div>
    </div>
  )
}

export default Service