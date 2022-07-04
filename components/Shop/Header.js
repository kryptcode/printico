import { MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '../Modal'

const Header = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
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

            <div className='flex md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? (
                            <XIcon className='h-6' />
                        ) : (
                            <MenuIcon className='h-6' />
                        )
                    }
                </div>
        </div>
        {
            isOpen && <Modal />
        }
    </>
  )
}

export default Header
