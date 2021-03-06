import Head from 'next/head'
import Flex1 from '../components/SignUp/Flex1'
import Flex2 from '../components/SignUp/Flex2'

const signup = () => {
    
  return (
    <div>
        <Head>
            <title>Printico | Sign Up</title>
            <meta name="description" content="Sign Up Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='w-full px-5 mx-auto flex flex-col md:space-x-5 md:flex-row'>
            <Flex1 
                img={'./assets/images/signup.png'} 
                text={'Sign up'}
            />
            <Flex2 
                name='sign-up'
            />
        </div>
    </div>
  )
}

export default signup