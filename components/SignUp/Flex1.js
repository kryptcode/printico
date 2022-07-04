import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '../Modal'

const Flex1 = ({ img, text  }) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`flex-1 pl-5  md:h-screen pt-10 relative ${text === 'Sign in' && 'md:bg-[#f4defc] ' }`}>
        <div className='flex justify-between items-center mb-10'>
            <h2 className='text-2xl font-semibold text-[#650088] cursor-pointer' onClick={() => router.push('/')}>
                PrintIco
            </h2>
            <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
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
            isOpen && (
                <Modal />
            )
        }
        <div className='text-[#e9b300] text-3xl font-semibold hidden md:flex'>
            
            {text === 'Sign in' ? (
                <span>Welcome back, <br />
                Sign in and resume printing.</span>
            ) : (
                <span>Sign Up and enjoy <br /> All Our Printing Services.</span>
            )}
        </div>
        {text === 'Sign in' ? (
            <img src={img} className='hidden md:flex absolute bottom-0 w-[66%]  ' alt="" />
        ) : (
            <img src={img} className='hidden md:flex absolute bottom-0 -left-[10rem] ' alt="" />
        ) }
    </div>
  )
}

export default Flex1