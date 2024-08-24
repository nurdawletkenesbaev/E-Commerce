import { CgClose } from "react-icons/cg";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { basketData, basketDataMinus, basketDeleteData } from "../../store/slices/pageActionSlice";

const ShoppingCartItem = ({ item, index }) => {
    const dispatch = useDispatch()
    const { basketCounter, basket } = useSelector(state => state.pageAction)
    const { products } = useSelector(state => state.product)
    return (
        <div className={`flex justify-between gap-[20px] items-center ${index === basket?.length - 1 ? '' : 'border-b-[1px] border-gray-400'}`}>
            <div className="w-[140px] h-[140px]">
                <img src={item.images?.[0]} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="w-full flex flex-col gap-[15px]">
                <p className="text-[19px] md:text-[22px] font-semibold">{item.title}</p>
                <div className="flex justify-between w-full items-center">
                    <div className="flex justify-center items-center gap-[10px] md:gap-[12px] text-[18px]">
                        <button onClick={() => dispatch(basketDataMinus(products.indexOf(item)))} className="p-[3px]">-</button>
                        <span className="px-[8px] md:px-[10px] rounded-md border-[1px] border-gray-400">{basketCounter.find((findItem, index) => index === products?.indexOf(item))}</span>
                        <button onClick={() => dispatch(basketData(products.indexOf(item)))} className="p-[3px]">+</button>
                    </div>
                    <span className="text-[20px] font-bold md:text-[24px] sm:font-semibold">${item.price}</span>
                    <button onClick={() => dispatch(basketDeleteData(products.indexOf(item)))} className="hover:bg-gray-200 text-[22px] p-[5px] rounded-md"><CgClose /></button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItem
