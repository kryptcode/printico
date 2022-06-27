import { MenuAlt1Icon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
  return (
    <div className='bg-[#7559a5] py-8'>
        <div className='w-[90%] mx-auto text-white flex items-center justify-between '>
            <h1 className='text-2xl font-semibold' onClick={() => router.push('/')}>
                PrintIco
            </h1>

            <div className='hidden md:flex space-x-5 text-xs font-semibold'>
                <p className='cursor-pointer hover:opacity-70'>Home</p>
                <p className='cursor-pointer hover:opacity-70'>About Us</p>
                <p className='cursor-pointer hover:opacity-70'>Services</p>
                <p className='cursor-pointer hover:opacity-70'>Our Work</p>
                <p className='cursor-pointer hover:opacity-70'>Contact Us</p>
            </div>

            <div className='hidden md:flex ' onClick={() => router.push('/shop')}>
                <button className='py-1.5 px-6 bg-[#f1d22a] text-[#650088] uppercase text-xs font-semibold hover:opacity-80 rounded-md '>
                    shop now
                </button>
            </div>

            <div className='flex md:hidden'>
                <MenuAlt1Icon className='h-8' />
            </div>
        </div>
    </div>
  )
}

export default Header