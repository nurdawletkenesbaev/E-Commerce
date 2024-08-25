import { ImSpinner2 } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSelectCategory, toggleCategory, togglePrice, toggleRating } from "../store/slices/pageActionSlice";

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
import ProductItem from "./pageComponents/ProductItem";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { Pagination, Grid } from 'swiper/modules';
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";


const Products = () => {
    const dispatch = useDispatch()
    const { isPriceFilterOpen, isCategoryFilterOpen, isRatingFilterOpen, selectCategory } = useSelector(state => state.pageAction)
    const { products, productLoad } = useSelector(state => state.product)
    const { categories } = useSelector(state => state.category)
    const [minPrice, setMinPrice] = useState(0)

    const [price, setPrice] = useState([0, 300])
    const [rating, setRating] = useState([0, 5])
    const [isFiltering, setIsFiltering] = useState(false)


    const [selectProducts, setSelectProducts] = useState(products ? products
        : products)

    function allProducts() {
        dispatch(setSelectCategory(''))
        setSelectProducts(products)
    }
    function byCategoryFilterProducts(item) {
        setSelectProducts(products.filter(filterItem => filterItem.categoryId === item.id))
        dispatch(setSelectCategory(item))
    }

    function filter() {
        setIsFiltering(true)
        if (selectCategory === '') setSelectProducts(products.filter(item =>
            (item.rating >= rating[0] && item.rating <= rating[1] && item.price >= price[0] && item.price <= price[1])
        ))
        else setSelectProducts(products.filter(item =>
            (item.categoryId === selectCategory.id && item.rating >= rating[0] && item.rating <= rating[1] && item.price >= price[0] && item.price <= price[1])
        ))
    }

    useEffect(() => {
        if (selectCategory !== '' && !isFiltering) setSelectProducts(products.filter(filterItem => filterItem.categoryId === selectCategory.id))
    }, [selectProducts.length])


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className='py-[40px] px-[7.5%] bg-[#EDEDED]'>

            <div className="mb-[40px] flex justify-start gap-[5px] items-center text-[20px] font-medium">
                <Link onClick={() => allProducts()} to={'/products'} className={`${selectCategory !== '' ? 'text-gray-500' : 'text-black'}`}>Products</Link>
                {
                    selectCategory !== '' ?
                        <div className="flex justify-start gap-[5px] items-center">
                            <MdKeyboardArrowLeft className="text-[26px] mt-1 text-gray-500 font-[200]" />
                            <Link to={'/products'} className="">{selectCategory.title}</Link>
                        </div>
                        : <></>
                }
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-[20px] relative">
                <div className='w-full sm:w-[25%] sm:min-w-[250px] sm:max-w-[250px] sm:sticky top-[20px] border-[1px] bg-white  rounded-md p-[10px] sm:max-h-[calc(100vh-110px)] sm:min-h-[calc(100vh-110px)] lg:max-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-160px)] overflow-y-auto px-[20px] sm:px-[10px]'>
                    <h1 className="text-[24px] py-[10px] font-semibold sm:text-[27px] text-center border-b-[1px] border-black">Filter</h1>
                    <div onClick={() => allProducts()} className="w-full flex justify-between items-center border-b-[1px] border-gray-400 hover:bg-gray-50 cursor-pointer px-[5px] py-[10px] rounded-sm text-[20px] font-semibold">
                        <p>All products</p>
                    </div>

                    <div onClick={() => dispatch(togglePrice())} className="w-full flex justify-between items-center border-b-[1px] border-gray-400 hover:bg-gray-50 cursor-pointer px-[5px] py-[10px] rounded-sm text-[20px] font-semibold">
                        <p>Filter by price</p>
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
                        <p>Filter by rating</p>
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
                                <div key={item.id} onClick={() => byCategoryFilterProducts(item)} className='flex gap-[8px] h-max py-[10px] px-[5px] items-center hover:bg-gray-100 cursor-pointer rounded-sm'>
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

                <div className="w-full sm:w-[75%] bg-white rounded-md p-[15px] overflow-hidden relative">
                    {
                        productLoad ?
                            <div className="h-[65vh] w-full flex gap-[10px] items-center justify-center text-gray-500">
                                <span className="text-[22px] mt-[2px] animate-spin"><ImSpinner2 /></span>
                                <h1 className="text-[22px] font-semibold">Loading...</h1>
                            </div>
                            :
                            <div>
                                <h1 className="mb-[10px] text-[20px] font-sm">Selected products <span className="font-medium">({selectProducts.length})</span></h1>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                                    {
                                        selectProducts?.map((item, index) => (
                                            <ProductItem key={item.id} item={item} />
                                        ))
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Products
