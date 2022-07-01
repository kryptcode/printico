import { useRouter } from 'next/router'

const GetStarted = () => {
  const router = useRouter()
  return (
    <div className='relative bg-gs text-center py-24'>
      {/* <div className='overlay ' /> */}
      <div className='space-y-5'>
        <h2 className='text-[#f1d22a] text-2xl md:text-5xl font-bold  '> 
        Start Printing With Us Today
        </h2>
        <p className='text-white text-sm md:text-md font-semibold'>
        Sign up and become one of the millions of people <br />
        around the world using PrintStudio.
        </p>
        <button className='py-2 px-6 bg-[#f1d22a] text-[#650088] uppercase  font-semibold hover:opacity-80 rounded-md '>
          Get Started - It's Free 
        </button>
      </div>
    </div>
  )
}

export default GetStarted