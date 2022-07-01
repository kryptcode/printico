
import TesCard from './TesCard'

const Testimonials = () => {
  return (
    <div className='my-16'>
        <div className='w-[90%] mx-auto '>
            <h6 className='text-center text-[#650088] font-bold mb-3 '>
                Our Testimonials
            </h6>
            <h2 className='text-3xl font-bold text-center mb-24'>
                What our customers say
            </h2>
            <div className='flex flex-col md:flex-row space-y-24 md:space-y-0 justify-between md:space-x-12'>
                <TesCard img='./assets/images/profile-1.png' />
                <TesCard img='./assets/images/profile-2.png' />
            </div>
        </div>
    </div>
  )
}

export default Testimonials