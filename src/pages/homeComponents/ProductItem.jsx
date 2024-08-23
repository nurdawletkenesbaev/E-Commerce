import { HiHeart } from "react-icons/hi"; 
import { HiOutlineHeart } from "react-icons/hi";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favouriteData } from "../../store/slices/pageActionSlice";
import { useInView } from "react-intersection-observer";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch()
  const {favourite} = useSelector(state => state.pageAction)
  const isFavourite = favourite?.find(findItem => findItem?.id === item.id)
  const {ref, inView} = useInView({
    threshold: 0.4,
    triggerOnce: true
  })

  const navigate = useNavigate()
  function productDetail(item) {
      navigate(`/products/${item.slug}-${item.id}`)
  }
  return (
    <div ref={ref} className={`${inView? 'top-0 opacity-100' : 'top-[30px] opacity-0'} relative duration-500 flex flex-col bg-[#F7F7F7] text-center items-center py-[16px] px-[12px] rounded-[6px] h-full`}>
      <div onClick={() => dispatch(favouriteData(item))} className="flex w-full justify-end text-[25px] cursor-pointer">
        {
          isFavourite ? <HiHeart  className="hover:scale-[1.05] active:scale-95 duration-200 text-red-500"/>
          : <HiOutlineHeart className="hover:scale-[1.05] active:scale-95 duration-200 text-gray-400"/>
        }
      </div>
      <div onClick={() => productDetail(item)} className="flex flex-1 w-[80%]  items-center cursor-pointer max-h-[150px]  overflow-hidden">
        <img src={item.images?.[0]} alt="" className="w-full h-full duration-200 object-contain" />
      </div>
      <div className="flex flex-col justify-between h-max mt-[10px]">
        <p className="font-semibold flex-1">{item?.title.length > 30 ? `${item?.title.slice(0, 27)}...` : item.title}</p>
        <div className="flex justify-center flex-col">
        <span className="text-[22px] font-[600]">${item?.price}</span>
          <button className="py-[10px] px-[30px] rounded-md text-white bg-black border-none">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
