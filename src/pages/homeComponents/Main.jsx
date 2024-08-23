import React from 'react'
import iphone from '../../images/images/iphone.png'

const Main = () => {
    return (
        <main className='min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-120px)] bg-[#211C24] px-[7.5%] flex flex-col md:flex-row justify-between gap-[40px]'>
            <div className='items-center text-center md:text-start md:items-start pt-[40px] flex flex-[2] justify-center flex-col gap-[20px]'>
                <p className='text-[20px] md:text-[22px] lg:text-[24px] text-gray-400'>Pro.Beyond.</p>
                <h1 className='font-[300] text-[60px] md:text-[65px] lg:text-[70px] text-white'>IPhone 14 <span className='font-[600]'>Pro</span></h1>
                <span className='text-[16px] md:text-[18px] lg:text-[20px] text-gray-400'>
                    Created to change everything for the better. For everyone
                </span>
                <div>
                    <button className='bg-transparent border-[1px] border-white  py-[10px] text-white px-[25px] sm:py-[12px] sm:px-[30px] lg:py-[15px] lg:px-[35px] rounded-md'>
                        Shop Now
                    </button>
                </div>
            </div>
            <div className='relative flex-1 min-h-[400px] sm:min-h-[500px] flex justify-center overflow-hidden'>
                <img src={iphone} alt="" className='base:w-full sm:w-[50%] md:w-[100%] lg:w-[90%] h-[120%] absolute z-[2]  base:translate-y-[100px] sm:translate-y-[50px]' />
            </div>
        </main>
    )
}

export default Main
