import { useRef } from 'react'

const Upload = () => {
    const inputRef = useRef(null);
  return (
    <div className='bg-[#f1d22a] my-32 '>
        <div className='w-[90%] mx-auto upload-bg flex flex-col-reverse  md:space-x-24 md:flex-row  py-24 '>
            <div className='flex-1 bg-white p-10'>
                <div className='mb-5'>
                    <h4 className='text-lg md:text-xl font-semibold text-gray-900'>
                        Upload your attachments
                    </h4>
                    <p className='text-sm md:font-semibold'>
                        Drag and drop your files here.
                    </p>
                </div>

                <div className='p-5 border-dashed border-gray-700 flex space-y-1.5 flex-col items-center font-semibold text-xs border'>
                    <img src="./assets/images/upload.svg" className='w-8 ' alt="" />
                    <p>
                        .PDF .JPG .PNG .DOC
                    </p>
                    <p className='text-gray-600'>
                        You can also upload files by
                    </p>
                    <button className='underline hover:opacity-80 text-[#650088] ' onClick={() => inputRef.current.click()}>
                        clicking here
                    </button>
                </div>

                <input
                ref={inputRef}
                type="file"
                className='hidden'
                />

                <div className='mt-6 flex justify-end'>
                    <button className='bg-[#650088] text-white text-xs font-semibold px-2 py-1.5 rounded-md hover:opacity-70  '>
                        Upload Files
                    </button>
                </div>
            </div>

            <div className="flex-[1.7] ">
                <h2 className='text-3xl md:text-[3.5rem] leading-none font-bold text-white mb-5 text-center md:text-left'>
                    <span className='underline decoration-[#650088] decoration-4 md:decoration-8'>Upload your files </span> <br /> online
                </h2>
                <p className='text-white text-center md:text-left text-sm md:w-[70%] mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt autem vitae tempore culpa eaque voluptatum a suscipit ex quas ipsam, veniam tenetur eum?
                </p>
                <button className='bg-[#650088] text-white text-sm font-semibold px-8 py-1.5 rounded-md hover:opacity-70 mb-10 hidden md:flex'>
                    Send Files
                </button>
            </div>
        </div>
    </div>
  )
}

export default Upload