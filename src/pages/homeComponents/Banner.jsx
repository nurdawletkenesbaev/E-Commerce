import React from 'react'
import banner from '../../images/images/banner.png'

const Banner = () => {
    return (
        <div className='relative flex justify-center items-center mt-[80px] py-[80px] min-h-[400px]'>
            <img src={banner} alt="" className='absolute h-full w-full  object-cover' />
            <div className='flex flex-col gap-[20px] justify-center items-center text-center h-full px-[7.5%] absolute w-full'>
                <h1 className='font-[300] text-[55px] sm:text-[60px] md:text-[65px] lg:text-[70px] text-white'>Big Summer <span className='font-[600]'>Sale</span></h1>
                <span className='text-[14px] sm:text-[15px] md:text-[16px] text-gray-400'>Commodo fames vitae vitae leo mauris in. Eu consequat.</span>
                <div>
                    <button className='bg-transparent border-[1px] border-white py-[10px] text-white px-[25px] sm:py-[12px] sm:px-[30px] lg:py-[15px] lg:px-[35px] rounded-md'>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
