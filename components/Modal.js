import  { useRouter } from 'next/router'

const Modal = () => {
    const router = useRouter()
  return (
    <div className='bg-gray-300/70 text-black h-[35vh] flex md:hidden flex-col justify-center space-y-8 mt-4 text-center text-xl font-semibold'>
        <div onClick={() => router.push('/signin')}>
            Log In
        </div>
        <div onClick={() => router.push('/shop')}>
            Shop
        </div>
    </div>
  )
}

export default Modal