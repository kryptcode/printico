import { MenuIcon } from '@heroicons/react/outline'

const Flex1 = ({ img, text  }) => {
  return (
    <div className='flex-1  md:h-screen pt-10 relative '>
        <div className='flex justify-between items-center mb-10'>
            <h2 className='text-2xl font-semibold text-[#650088] '>
                PrintIco
            </h2>
            <div className='md:hidden'>
                <MenuIcon className='h-6' />
            </div>
        </div>
        <div className='text-[#e9b300] text-3xl font-semibold hidden md:flex'>
            {text} and enjoy <br /> All Our Printing Services.
        </div>
        <img src={img} className='hidden md:flex absolute bottom-0 -left-[10rem] ' alt="" />
    </div>
  )
}

export default Flex1