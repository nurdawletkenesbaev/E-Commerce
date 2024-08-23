import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import './BrowseByCategory.css'

import { GiGamepad } from "react-icons/gi";
import { BiCamera } from "react-icons/bi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsTv } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaTabletAlt } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi"; 
import { BiFridge } from "react-icons/bi"; 
import { GiVacuumCleaner } from "react-icons/gi"; 



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';


import { Grid, Navigation } from 'swiper/modules';

const BrowseByCategory = () => {
    const { categories } = useSelector(state => state.category)

    // const swiper = useSwiper();

    // const navigationPrevRef = useRef(null)
    // const navigationNextRef = React.useRef(null)

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    // var swiper = new Swiper(".mySwiper", {
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });

    return (
        <div className='w-[85%] mx-auto my-[80px] relative bg-white'>
            <div className="flex justify-between gap-[50px] items-center mb-[20px]">
                <p className="text-[18px] sm:text-[20px] md:text-[22px] font-medium">Browse By Category</p>
                <div className="flex justify-center gap-[15px] items-center">
                    <div ref={prevRef} className="disabled:bg-red-500">
                        <button className="swiper-button-prev text-[20px] sm:text-[22px] md:text-[24px] text-black active:scale-[0.9] duration-200 disabled:scale-90" >
                            <GrPrevious />
                        </button>
                    </div>
                    <div ref={nextRef}>
                        <button className="swiper-button-next text-[20px] sm:text-[22px] md:text-[24px] text-black active:scale-[0.9] duration-200" >
                            <GrNext />
                        </button>
                    </div>
                </div>
            </div>
            <div className="slider-container">

                <Swiper
                   
                    breakpoints={{
                        1024: {
                            slidesPerView: 6,
                            grid: {
                                rows: 1
                            }
                        },

                        550: {
                            slidesPerView: 3,
                            grid: {
                                rows: 2,
                            }
                        },

                        300: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3,
                            }
                        },
                    }}
                    slidesPerView={2}
                    grid={{
                        rows: 3,
                    }}
                    spaceBetween={20}
                    modules={[Grid, Navigation]}
                    className="mySwiper"
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    {
                        categories.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className='bg-[#EDEDED] rounded-md  flex flex-col  px-[10px] py-[20px] items-center text-center justify-center gap-[8px] h-max'>
                                    <div className='flex justify-center text-[25px] sm:text-[28px] md:text-[30px]'>
                                        {eval(item.icon)()}
                                    </div>
                                    <p className='text-[13px] sm:text-[14px] md:text-[15px]'>{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {/* <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper> */}


            </div>
        </div>
    )
}

export default BrowseByCategory
