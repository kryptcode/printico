import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
  return (
    <div className='w-[90%] mx-auto flex justify-between items-center font-bold my-7'>
        <div className='text-xl uppercase cursor-pointer' onClick={() => router.push('/')}>
            printico
        </div>
        <div className='hidden md:flex space-x-6'>
            <p>
                Features
            </p>
            <p>
                Pricing
            </p>
            <p>
                Contact Us
            </p>
        </div>
        <div className='hidden md:flex items-center space-x-8'>
            <div className='hover:bg-black/10 p-3 cursor-pointer rounded-full' onClick={() => router.push('/cart')}>
            <ShoppingCartIcon className='h-6 '  />
            </div>

            <button className='py-1.5 uppercase px-6 rounded-md bg-[#f1d22a] text-white hover:opacity-80' onClick={() => router.push('/signup')}>
                sign up
            </button>
        </div>

        <div className='flex md:hidden cursor-pointer'>
            <MenuIcon className='h-6' />
        </div>
    </div>
  )
}

export default Header