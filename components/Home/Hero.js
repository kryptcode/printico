import { useRouter } from 'next/router'

const Hero = () => {
    const router = useRouter()
  return (
    <div className='relative home-hero py-52 z-20 md:py-16'>
        <div className='w-[90%] mx-auto flex justify-between items-center'>
            <div className='flex-1 text-white text-center md:text-left'>
                <h3 className='text-2xl md:text-[3rem] leading-none font-bold mb-5 '>
                Let Us Handle All <br /> Your <span className='underline decoration-yellow-500 decoration-4  '>Printing</span> Needs.
                </h3>
                <p className='mb-8'>
                    Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Quae, consequatur!
                </p>
                <button className='py-1.5 px-6 bg-[#f1d22a] text-[#650088] uppercase text-xs font-semibold hover:opacity-80 rounded-md' onClick={() => router.push('/shop') }>
                    Shop Now
                </button>
            </div>

            <div className='flex-1 justify-end hidden md:flex'>
                <img src="./assets/images/home-hero.webp" className='w-[70%] ' alt="" />
            </div>

            <div className='overlay md:hidden' />
        </div>
    </div>
  )
}

export default Hero