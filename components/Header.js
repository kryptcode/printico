import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from './Modal'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
  return (
    <div className='home-header z-20 relative py-8'>
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

            <div className='flex md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? (
                        <XIcon className='h-6' />
                    ) : (
                        <MenuAlt1Icon className='h-6' />
                    )
                }
            </div>
        </div>
        <div className='overlay md:hidden' />

        {
            isOpen && <Modal />
        }
    </div>
  )
}

export default Header