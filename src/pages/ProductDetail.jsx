import { MdKeyboardArrowLeft } from "react-icons/md"; 
import { BsPatchCheck } from "react-icons/bs";
import { TbHome } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import ReactStarsRating from 'react-awesome-stars-rating';
import { basketData, favouriteData } from "../store/slices/pageActionSlice";
import ProductItem from "./pageComponents/ProductItem";

const ProductDetail = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)
    const { products } = useSelector(state => state.product)
    const { favourite } = useSelector(state => state.pageAction)
    const { pathname } = useLocation()
    const selectProduct = products.find(findItem => `/products/${findItem.slug}-${findItem.id}` === pathname)
    const selectCategory = categories.find(findItem => findItem.id === selectProduct?.categoryId)
    const relatedProducts = products.filter(filterItem => filterItem.categoryId === selectCategory?.id)
    const [selectImage, setSelectImage] = useState(selectProduct?.images[0])

    const isFavourite = favourite.find(item => item === selectProduct)

    const { ref, inView } = useInView({})


    return (
        <div className="px-[7.5%] py-[40px]">
            <div className="mb-[40px] flex justify-start gap-[5px] items-center text-[20px] font-medium">
                <Link to={'/products'} className="text-gray-500">Products</Link>
                <MdKeyboardArrowLeft className="text-[26px] mt-1 text-gray-500 font-[200]"/>
                <Link to={'/products'} className="text-gray-500">{selectCategory?.title}</Link>
                <MdKeyboardArrowLeft className="text-[26px] mt-1 text-gray-500 font-[200]"/>
                <Link to={`/products/${selectProduct.slug}-${selectProduct.id}`}>{selectProduct.title}</Link>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-[20px] '>
                <div className='flex lg:h-full flex-col-reverse sm:flex-row lg:w-[50%] justify-between gap-[20px] items-center'>
                    <div className='lg:h-full items-center w-full sm:w-[180px] justify-center overflow-y-auto flex sm:flex-col gap-[10px]'>
                        {
                            selectProduct?.images.map(item => (
                                <div onClick={() => setSelectImage(item)} key={item} className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] border-[1px] border-gray-400 p-[5px] rounded-sm overflow-hidden cursor-pointer '>
                                    <img src={item} alt="" className='w-full h-full object-cover active:scale-95 duration-300' />
                                </div>
                            ))
                        }
                    </div>
                    <div ref={ref} className={`w-[300px] h-[300px] overflow-hidden sm:h-auto sm:w-full  flex items-center justify-center relative ${inView ? 'opacity-100' : 'opacity-0'} duration-300`}>
                        <img src={selectImage} alt="" className='h-full w-full object-cover max-h-[300px] max-w-[300px] duration-500' />
                    </div>
                </div>
                <div className='flex lg:w-[50%] flex-col gap-[20px]'>
                    <h2 className='text-[26px] font-semibold'>{selectProduct?.title}</h2>
                    <span className='text-[20px] font-[400]'>${selectProduct?.price}</span>
                    <div className='border-[1px] text-[17px] border-gray-400 rounded-md max-h-[200px] min-h-[200px] overflow-y-auto p-[10px]'>
                        {selectProduct?.description}
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between gap-[20px]'>
                        <button onClick={() => dispatch(favouriteData(selectProduct))} className='py-[7px] px-[25px] rounded-md w-full sm:w-[50%] text-black bg-transparent border-[1px] border-black active:scale-95'>{isFavourite ? 'Remove from Wishlist' : 'Add to Wishlist'}</button>
                        <button onClick={() => dispatch(basketData(products.indexOf(selectProduct)))} className='py-[7px] px-[25px] rounded-md w-full sm:w-[50%] text-white bg-black active:scale-95'>Add to Card</button>
                    </div>
                    <div className='flex justify-between gap-[10px]'>
                        <div className='flex flex-col sm:flex-row text-center sm:text-start justify-between gap-[10px] text-nowrap items-center'>
                            <div className="text-gray-600  border-[1px] border-gray-400 text-[22px] rounded-md bg-gray-100 w-[50px] h-[50px] flex justify-center items-center"><CiDeliveryTruck /></div>
                            <div className='flex flex-col gap-[5px]'>
                                <span className="text-[16px] text-gray-400">Free Delivery</span>
                                <p className="text-[18px]">1-2 day</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row text-center sm:text-start justify-between gap-[10px] text-nowrap items-center'>
                            <div className="text-gray-600  border-[1px] border-gray-400 text-[22px] rounded-md bg-gray-100 w-[50px] h-[50px] flex justify-center items-center"><TbHome /></div>
                            <div className='flex flex-col gap-[5px]'>
                                <span className="text-[16px] text-gray-400">in Stock</span>
                                <p className="text-[18px]">Today</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row text-center sm:text-start justify-between gap-[10px] text-nowrap items-center'>
                            <div className="text-gray-600  border-[1px] border-gray-400 text-[22px] rounded-md bg-gray-100 w-[50px] h-[50px] flex justify-center items-center"><BsPatchCheck /></div>
                            <div className='flex flex-col gap-[5px]'>
                                <span className="text-[16px] text-gray-400">Guaranteed</span>
                                <p className="text-[18px]">1 year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-[40px]">
                <h2 className="text-[23px] sm:text-[26px] font-bold">Reviews</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-[20px] mt-[20px] items-center">
                    <div className="w-[200px] flex flex-col gap-[10px] h-full items-center rounded-md bg-gray-100 py-[20px]">
                        <h1 className="text-[36px] font-bold">{selectProduct?.rating}</h1>
                        <span className="text-[16px] text-gray-400">of 125 reviews</span>
                        <ReactStarsRating stars={5} value={selectProduct?.rating} className='flex' />
                    </div>
                    <div className="w-full lg:w-[calc(100%-150px)]">
                        <div className="flex justify-between items-center gap-[15px]">
                            <span className="w-[140px] text-[15px]">Excellent</span>
                            <div className="relative w-[80%] h-[10px] bg-gray-300 rounded-md">
                                <div className="absolute left-0 top-0 h-[10px] w-[90%] bg-yellow-400 rounded-md"></div>
                            </div>
                            <span className="w-[30px] text-end text-[14px]">100</span>
                        </div>
                        <div className="flex justify-between items-center gap-[15px]">
                            <span className="w-[140px] text-[15px]">Good</span>
                            <div className="relative w-[80%] h-[10px] bg-gray-300 rounded-md">
                                <div className="absolute left-0 top-0 h-[10px] w-[60%] bg-yellow-400 rounded-md"></div>
                            </div>
                            <span className="w-[30px] text-end text-[14px]">11</span>
                        </div>
                        <div className="flex justify-between items-center gap-[15px]">
                            <span className="w-[140px] text-[15px]">Average</span>
                            <div className="relative w-[80%] h-[10px] bg-gray-300 rounded-md">
                                <div className="absolute left-0 top-0 h-[10px] w-[50%] bg-yellow-400 rounded-md"></div>
                            </div>
                            <span className="w-[30px] text-end text-[14px]">3</span>
                        </div>
                        <div className="flex justify-between items-center gap-[15px]">
                            <span className="w-[140px] text-nowrap text-[15px]">Below Average</span>
                            <div className="relative w-[80%] h-[10px] bg-gray-300 rounded-md">
                                <div className="absolute left-0 top-0 h-[10px] w-[52%] bg-yellow-400 rounded-md"></div>
                            </div>
                            <span className="w-[30px] text-end text-[14px]">8</span>
                        </div>
                        <div className="flex justify-between items-center gap-[15px]">
                            <span className="w-[140px] text-[15px]">Poor</span>
                            <div className="relative w-[80%] h-[10px] bg-gray-300 rounded-md">
                                <div className="absolute left-0 top-0 h-[10px] w-[46%] bg-yellow-400 rounded-md"></div>
                            </div>
                            <span className="w-[30px] text-end text-[14px]">3</span>
                        </div>
                    </div>
                </div>

                <div className="my-[30px]">
                    <input type="text" className="py-[10px] px-[20px] w-full rounded-md border-gray-400 border-[1px] outline-none" placeholder="Leave Comment" />
                </div>

                <div>
                    <div className="flex justify-between gap-[20px] my-[40px]">
                        <div className="w-[60px]">
                            <img src="https://i.postimg.cc/WbKmG7bW/ai-generated-professional-man-in-suit-with-arms-crossed-on-transparent-background-stock-png.png" alt="" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-[10px] w-full">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-[18px] sm:text-[20px] font-bold">Grace Carey</p>
                                <span className="text-[14px] sm:text-[16px] text-gray-400">23 August 2024</span>
                            </div>
                            <ReactStarsRating stars={5} value={4} className='flex' />
                            <p className="text-[13px] sm:text-[14px] text-gray-600">
                                I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤
                            </p>
                        </div>

                    </div>
                    <div className="flex justify-between gap-[20px] my-[40px]">
                        <div className="w-[60px]">
                            <img src="https://i.postimg.cc/CKCjVTCX/r-Tk-J7v-man-png-image.png" alt="" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-[10px] w-full">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-[18px] sm:text-[20px] font-bold">Ronald Richards</p>
                                <span className="text-[14px] sm:text-[16px] text-gray-400">23 August 2024</span>
                            </div>
                            <ReactStarsRating stars={5} value={4.5} className='flex' />
                            <p className="text-[13px] sm:text-[14px] text-gray-600">
                                This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.
                            </p>
                        </div>

                    </div>
                    <div className="flex justify-between gap-[20px] my-[40px]">
                        <div className="w-[60px]">
                            <img src="https://i.postimg.cc/MK44nVkx/a-positive-young-man-with-a-beard-wearing-a-casual-sweater-and-glasses-png.png" alt="" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-[10px] w-full">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-[18px] sm:text-[20px] font-bold">Darcy King</p>
                                <span className="text-[14px] sm:text-[16px] text-gray-400">23 August 2024</span>
                            </div>
                            <ReactStarsRating stars={5} value={3.9} className='flex' />
                            <p className="text-[13px] sm:text-[14px] text-gray-600">
                                I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <h1 className="text-[23px] sm:text-[26px] font-bold my-[20px]">Related products</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                    {
                        relatedProducts?.map((item, index) => {
                            if (index < 4) return <ProductItem key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default ProductDetail
