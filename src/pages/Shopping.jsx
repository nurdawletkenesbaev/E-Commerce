import { HiOutlineShoppingBag } from "react-icons/hi"; 
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartItem from './pageComponents/ShoppingCartItem'
import { basket } from '../store/slices/pageActionSlice'

const Shopping = () => {
  const dispatch = useDispatch()
  const { basketCounter } = useSelector(state => state.pageAction)
  const { products } = useSelector(state => state.product)
  const basketData = products.filter((item, index) => basketCounter[index] !== 0)

  let subTotal = 0
  for (let i = 0; i < basketCounter.length; i++) {
    subTotal += products[i].price * basketCounter[i]
  }
  const estimatedTax = 50
  const estimatedShippingAndHandling = 29
  const total = subTotal + estimatedShippingAndHandling + estimatedTax

  return (
    <div className='px-[7.5%] py-[40px]'>
      {
        basketData.length === 0
          ?
          <div>
            <h2 className="text-[32px] text-center sm:text-[37px] font-bold mb-[20px] text-gray-500">Your shopping cart is empty</h2>
            <div className="h-[50vh] w-full flex justify-center items-center text-[90px] text-gray-500 ">
                <HiOutlineShoppingBag className="animate-bounce" />              
            </div>
          </div>
          :
          <div className='flex flex-col md:flex-row justify-between gap-[40px]'>
            <div className='md:w-[50%] flex flex-col'>
              <h2 className="text-[23px] md:text-[26px] font-bold">Shopping Cart</h2>
              <div className='flex flex-col gap-[20px] '>
                {
                  basketData?.map((item, index) => {
                    return <ShoppingCartItem item={item} key={item.id} index={index} />
                  })
                }
              </div>
            </div>
            <div className='md:w-[50%] flex flex-col gap-[20px]'>
              <h2 className="text-[23px] md:text-[26px] font-bold">Order Summary</h2>
              <div className='flex flex-col gap-[10px]'>
                <label htmlFor="code" className='text-gray-600 font-[500]'>Discount code/Promo code</label>
                <input type="text" id='code' placeholder='Code' className='py-[12px] px-[10px] border-[1px] border-gray-400 rounded-md outline-none bg-transparent' />
              </div>
              <div className='flex flex-col gap-[10px] relative'>
                <label htmlFor="card-number" className='text-gray-600 font-[500]'>Your bonus card number</label>
                <input type="text" id='card-number' placeholder='Enter Card Number' className='py-[12px] px-[10px] border-[1px] border-gray-400 text-gray-400 rounded-md outline-none bg-transparent' />
                <button className='absolute bottom-[5px] right-[5px] text-black font-[500] py-[7px] px-[12px] md:px-[20px] rounded-md border-[1px] border-black bg-transparent active:scale-95'>Apply</button>
              </div>
              <div className='flex justify-between mt-[20px]'>
                <p className='text-[18px] font-semibold'>Subtotal</p>
                <span className='text-18px font-bold'>${subTotal}</span>
              </div>
              <div className='flex justify-between'>
                <p className='text-[16px] text-gray-400'>Estimated Tax</p>
                <span className='text-18px font-bold'>${estimatedTax}</span>
              </div>
              <div className='flex justify-between'>
                <p className='text-[16px] text-gray-400'>Estimated Shipping & Handling</p>
                <span className='text-18px font-bold'>${estimatedShippingAndHandling}</span>
              </div>
              <div className='flex justify-between'>
                <p className='text-[18px] font-semibold'>Total</p>
                <span className='text-18px font-bold'>${total}</span>
              </div>
              <button className='bg-black text-white py-[10px] rounded-md active:scale-95 duration-200'>Checkout</button>
            </div>
          </div>
      }
    </div>
  )
}

export default Shopping
