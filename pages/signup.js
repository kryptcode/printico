import Head from 'next/head'
import Flex1 from '../components/SignUp/Flex1'
import { useRouter } from 'next/router'

const signup = () => {
    const router = useRouter()
  return (
    <div>
        <Head>
            <title>Printico | Sign Up</title>
            <meta name="description" content="Sign Up Page" />
            <link rel="icon" href="/favicon.ico" />
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
                crossOrigin="anonymous" 
                referrerPolicy="no-referrer" 
            />
        </Head>

        <div className='w-full px-5 mx-auto flex flex-col md:flex-row'>
            <Flex1 
                img={'./assets/images/signup.png'} 
                text={'Sign up'}
            />
            <div className='flex-1'>
                <div className='text-sm font-semibold text-right mb-3 pt-3'>
                Already a member? <span className='cursor-pointer text-blue-400' onClick={() => router.push('/signin')}>Sign in</span>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-6'>
                        Sign up to PrintIco 
                    </h3>
                    <div className='flex justify-between space-x-3 items-center'>
                        <button className='flex-1 bg-blue-500 rounded-md py-3 text-white font-medium'>
                            <i className="fa-brands fa-google"></i> Sign up with Google
                        </button>
                        <div className='flex-1 flex justify-center items-center text-lg text-gray-500 space-x-5'>
                            <button className='p-4 bg-gray-200/70 '>
                                <i className="fa-brands fa-twitter"></i>                
                            </button>
                            <button className='p-4 bg-gray-200/70 '>
                                <i className="fa-brands fa-facebook-f"></i>                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default signup