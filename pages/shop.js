import Head from 'next/head'
import Collection from '../components/Shop/Collection'
import Header from '../components/Shop/Header'
import Hero from '../components/Shop/Hero'
import Subscribe from '../components/Shop/Subscribe'
import Footer from '../components/Footer'


const shop = () => {
  return (
    <div>
        <Head>
            <title>Printico | Shop</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Hero />

        <div className='w-[90%] mx-auto flex justify-between items-center text-sm md:text-md my-16 font-semibold'>
          <p className='py-1.5 px-8 bg-[#f1d22a] text-white'>All</p>
          <p>Hoodies</p>
          <p>T-Shirts</p>
          <p className='hidden md:flex'>Shoes</p>
          <p>Custom Mugs</p>
          <p className='hidden md:flex'>Notepads</p>
          <p className='hidden md:flex'>Custom Pens</p>
        </div>

        <Subscribe />
        <Collection />
        <Footer />
    </div>
  )
}

export default shop