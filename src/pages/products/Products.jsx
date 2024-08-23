import { IoIosArrowUp } from "react-icons/io";
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory, togglePrice, toggleRating } from "../../store/slices/pageActionSlice";
import './Products.css'

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
import ProductItem from "../homeComponents/ProductItem";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
// import 'swiper/css/effect-fade';
// import './styles.css';
import { Pagination, Grid } from 'swiper/modules';


const Products = () => {
    const dispatch = useDispatch()
    const { isPriceFilterOpen, isCategoryFilterOpen, isRatingFilterOpen } = useSelector(state => state.pageAction)
    const { products, productLoad } = useSelector(state => state.product)
    const { categories } = useSelector(state => state.category)
    const [minPrice, setMinPrice] = useState(0)
    // useEffect(() => {
    // if(!productLoad && products.length !== 0) for (let i = 0; i < products?.length; i++) {
    //     if (products?.[i].price > minPrice) useEffect(() => {
    //         setMinPrice(products?.[i].price)
    //     }, [i])
    // }
    // }, [productLoad])
    // console.log(minPrice)
    const [price, setPrice] = useState([0, 300])
    const [rating, setRating] = useState([0, 5])

    const [selectProducts, setSelectProducts] = useState(products ? products
        : products)
    function byPriceFilterProducts(ratingValues) {
        setSelectProducts(prev => prev.filter(item => item.rating >= ratingValues[0] && item.rating <= ratingValues[1]))
    }
    function byRatingFilterProducts(ratingValues) {
        setSelectProducts(prev => prev.filter(item => item.rating >= ratingValues[0] && item.rating <= ratingValues[1]))
    }
    function byCategoryFilterProducts(id) {
        setSelectProducts(products.filter(item => item.categoryId === id))
    }

    function filter() {
        setSelectProducts(products.filter(item => item.price >= price[0] && item.price <= price[1]))
        // setSelectProducts(products.filter(item => item.rating >= rating[0] && item.rating <= rating[1]))
    }


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className='py-[20px] px-[7.5%] bg-[#EDEDED] flex justify-between gap-[20px] relative'>
            <div className='w-[25%] min-w-[250px] max-w-[250px] sticky top-[20px] border-[1px] bg-white  rounded-md p-[10px] max-h-[calc(100vh-110px)] min-h-[calc(100vh-110px)] lg:max-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-160px)] overflow-y-auto'>
                <h1 className="text-[24px] font-semibold sm:text-[27px] text-center border-b-[1px] border-black">Filter</h1>
                <div onClick={() => setSelectProducts(products)} className="w-full flex justify-between items-center border-b-[1px] border-gray-400 hover:bg-gray-50 cursor-pointer px-[5px] py-[10px] rounded-sm text-[20px] font-semibold">
                    <p>All products</p>
                </div>

                <div onClick={() => dispatch(togglePrice())} className="w-full flex justify-between items-center border-b-[1px] border-gray-400 hover:bg-gray-50 cursor-pointer px-[5px] py-[10px] rounded-sm text-[20px] font-semibold">
                    <p>Price</p>
                    <IoIosArrowUp className={`${isPriceFilterOpen ? '' : 'rotate-180'} duration-200`} />
                </div>
                <div className={`${isPriceFilterOpen ? 'flex flex-col' : 'hidden'} duration-200`}>
                    <div className='flex justify-between gap-[20px] mb-[20px]'>
                        <div className='flex flex-col  justify-start w-[50%]'>
                            <span className='text-start'>From</span>
                            <div className='p-[5px] w-full border-[1px] border-gray-400 rounded-md text-black flex justify-center items-center'>{price[0]}</div>
                        </div>
                        <div className='flex flex-col  justify-end w-[50%]'>
                            <span className='text-start'>To</span>
                            <div className='p-[5px] w-full border-[1px] border-gray-400 rounded-md text-black flex justify-center items-center'>{price[1]}</div>
                        </div>
                    </div>
                    <div className="w-full px-[5px]">
                        <RangeSlider onChange={(value) => setPrice(value)} defaultValue={[0, 300]} min={0} max={300} step={1}>
                            <RangeSliderTrack bg='gray.400'>
                                <RangeSliderFilledTrack bg='black' />
                            </RangeSliderTrack>
                            <RangeSliderThumb boxSize={4} bg={'black'} border={'black'} index={0} />
                            <RangeSliderThumb boxSize={4} bg={'black'} index={1} />
                        </RangeSlider>
                    </div>
                </div>

                <div onClick={() => dispatch(toggleRating())} className="w-full flex justify-between items-center  border-b-[1px] border-gray-400 hover:bg-gray-50 cursor-pointer px-[5px] py-[10px] rounded-sm text-[20px] font-semibold">
                    <p>By rating</p>
                    <IoIosArrowUp className={`${isRatingFilterOpen ? '' : 'rotate-180'} duration-200`} />
                </div>
                <div className={`${isRatingFilterOpen ? 'flex flex-col' : 'hidden'} duration-200`}>
                    <div className='flex justify-between gap-[20px] mb-[20px]'>
                        <div className='flex flex-col  justify-start w-[50%]'>
                            <span className='text-start'>From</span>
                            <div className='p-[5px] w-full border-[1px] border-gray-400 rounded-md text-black flex justify-center items-center'>{rating[0]}</div>
                        </div>
                        <div className='flex flex-col  justify-end w-[50%]'>
                            <span className='text-start'>To</span>
                            <div className='p-[5px] w-full border-[1px] border-gray-400 rounded-md text-black flex justify-center items-center'>{rating[1]}</div>
                        </div>
                    </div>
                    <div className="w-full px-[5px]">
                        <RangeSlider onChange={(value) => setRating(value)} defaultValue={[0, 5]} min={0} max={5} step={0.1}>
                            <RangeSliderTrack bg='gray.400'>
                                <RangeSliderFilledTrack bg='black' />
                            </RangeSliderTrack>
                            <RangeSliderThumb boxSize={4} bg={'black'} border={'black'} index={0} />
                            <RangeSliderThumb boxSize={4} bg={'black'} index={1} />
                        </RangeSlider>
                    </div>
                </div>

                <div onClick={() => dispatch(toggleCategory())} className="w-full border-b-[1px] border-gray-400 cursor-pointer flex justify-between items-center mb-[10px] hover:bg-gray-50 px-[5px] py-[10px] rounded-sm text-[20px] font-semibold">
                    <p>Categories</p>
                    <IoIosArrowUp className={`${isCategoryFilterOpen ? '' : 'rotate-180'} duration-200`} />
                </div>
                <div className={`${isCategoryFilterOpen ? 'flex flex-col' : 'hidden'} duration-200 border-b-[1px] border-gray-400`}>
                    {
                        categories?.map((item) => (
                            <div key={item.id} onClick={() => byCategoryFilterProducts(item.id)} className='flex gap-[8px] h-max py-[10px] px-[5px] items-center hover:bg-gray-100 cursor-pointer rounded-sm'>
                                <div className='flex justify-center w-[30px] h-[30px] sm:text-[28px] md:text-[30px]'>
                                    <span className="w-full h-full text-gray-500">{eval(item.icon)()}</span>
                                </div>
                                <p className='text-[13px] sm:text-[14px] md:text-[15px]'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="w-full flex justify-end mt-[20px]">
                    <button onClick={() => filter()} className="py-[10px] px-[30px] bg-black active:scale-95 duration-200 rounded-md text-white">
                        Apply
                    </button>
                </div>

            </div>

            <div className="w-[75%] bg-white rounded-md p-[10px] overflow-hidden relative">
                <h1 className="mb-[10px] text-[20px] font-sm">Selected products <span className="font-medium">({selectProducts.length})</span></h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                    {
                        selectProducts?.map((item, index) => (
                            <ProductItem key={item.id} item={item} />
                        ))
                    }
                </div>


                {/* <Swiper
                    pagination={pagination}
                    modules={[Pagination, Grid]}
                    slidesPerView={3}
                    mousewheel={true}
                    grid={{
                        rows: 3,
                    }}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {
                        products?.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <ProductItem item={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper> */}

            </div>

        </div>
    )
}

export default Products
