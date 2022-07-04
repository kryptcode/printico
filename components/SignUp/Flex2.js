import { useRouter } from 'next/router'

const Flex2 = ({ name }) => {
    const router = useRouter()
  return (
    <div className='flex-1 pl-5'>
        <div className='text-sm font-semibold  text-right mb-3 pt-3'>
            Already a member? <span className='cursor-pointer text-blue-400 ' onClick={() => router.push(name === 'sign-up' ? 'signin' : 'signup' )}>
                {
                    name === 'sign-up' ? 'Sign In' : 'Sign Up'
                }
            </span>
        </div>
        <div>
            <h3 className='text-xl font-semibold mb-6'>
            Sign 
            {
                    name === 'sign-up' ? ' Up ' : ' In '
                } 
            to PrintIco 
            </h3>
            <div className='flex justify-between space-x-4 md:space-x-6 items-center'>
            <div className='flex-1'>
                            <button className='w-full md:w-[90%] bg-blue-500 rounded-md py-3 text-white text-sm md:text-base font-medium'>
                                <i className="fa-brands fa-google"></i> Sign up with Google
                            </button>
            </div>
            <div className='flex-1 flex justify-center  items-center text-lg text-gray-500 space-x-9 md:space-x-16'>
                            <button className='w-16 h-16 bg-gray-200/70 rounded-md'>
                                <i className="fa-brands fa-twitter"></i>                
                            </button>
                            <button className='w-16 h-16 bg-gray-200/70 rounded-md'>
                                <i className="fa-brands fa-facebook-f"></i>                
                            </button>
                        </div>
                    </div>
                    <div className='my-6 flex justify-between items-center space-x-4'>
                        <div className='bg-black h-[1px] flex-1 ' />
                        <p className='text-gray-600 font-semibold'>or</p>
                        <div className='bg-black h-[1px] flex-1 ' />
                    </div>
                    <div className={`${name !== 'sign-up' ? 'hidden' : 'flex'} flex-col mb-6 md:flex-row space-y-6 md:space-y-0 md:space-x-12`}>
                        <div>
                            <h6 className='font-semibold text-sm mb-1'>FIRSTNAME</h6>
                            <input type="text" className='bg-gray-300/60  w-full py-2 pl-2 outline-none rounded-md' />
                        </div>
                        <div>
                            <h6 className='font-semibold text-sm mb-1'>SURNAME</h6>
                            <input type="text" className='bg-gray-300/60 w-full py-2 pl-2 outline-none rounded-md' />
                        </div>
                    </div>
                    <div className='mb-6'>
                        <h6 className='font-semibold text-sm mb-1'>EMAIL ADDRESS</h6>
                        <input type="text" className='bg-gray-300/60  w-full py-2 pl-2 outline-none rounded-md' />
                    </div>
                    <div className='mb-6'>
                        <h6 className='font-semibold text-sm mb-1'>PASSWORD</h6>
                        <input type="text" className='bg-gray-300/60  w-full py-2 pl-2 outline-none rounded-md' />
                    </div>
                    <div className={`space-x-3 items-start mb-6 ${name !== 'sign-up' ? 'hidden' : 'flex'}`}>
                        <input type="checkbox" />
                        <p className='text-xs'>
                        Creating an account means you're okay with our <span className='text-blue-400 cursor-pointer'>Terms of Service, Privacy Policy,</span> and our default <span className='text-blue-400 cursor-pointer'>Notification Settings</span>
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='py-1.5 px-3 text-white bg-[#f1d22a] rounded-md'>
                            {
                                name === 'sign-up' ? 'Get Started' : 'Sign In'
                            }
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default Flex2