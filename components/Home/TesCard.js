import { StarIcon } from '@heroicons/react/solid'
import { StarIcon as StarCold } from '@heroicons/react/outline'

const TesCard = ({ img }) => {
  return (
    <div className='relative bg-[#650088] p-10 md:p-16'>
        <img src={img} className='w-24 absolute tes-img' alt="" />
        <p className='text-white font-semibold mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo delectus doloribus ipsam.
        </p>
        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between'>
            <div>
                <div className='flex space-x-1'>
                    <StarIcon className='h-6 text-[#dfc900] ' />
                    <StarIcon className='h-6 text-[#dfc900] ' />
                    <StarIcon className='h-6 text-[#dfc900] ' />
                    <StarIcon className='h-6 text-[#dfc900] ' />
                    <StarCold className='h-6 text-[#dfc900] ' />
                </div>
                <p className='text-white font-medium text-sm'>
                    4 star rating
                </p>
            </div>
            <h6 className='text-[#dfc900] font-semibold'>
                    -Sarah Fox
            </h6>  
        </div>
    </div>
  )
}

export default TesCard