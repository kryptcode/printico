import Head from 'next/head'
import Flex1 from '../components/SignUp/Flex1'
import Flex2 from '../components/SignUp/Flex2'

const signin = () => {
  return (
    <div>
        <Head>
            <title>Printico | Sign In</title>
            <meta name="description" content="Sign Up Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='w-full mx-auto flex pr-5 md:space-x-5 flex-col md:flex-row'>
            <Flex1 
                img={'./assets/images/login.png'} 
                text={'Sign in'}
            />
            <Flex2 
                name='sign-in'
            />
        </div>
    </div>
  )
}

export default signin