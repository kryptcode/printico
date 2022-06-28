import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import OC from '../components/Home/OC'
import Services from '../components/Home/Services'
import Upload from '../components/Home/Upload'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Printico | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <OC />
      <Services />
      <Upload />
      
    </div>
  )
}
