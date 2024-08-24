import { BsFillBox2HeartFill } from "react-icons/bs"; 
import { BiHeart } from "react-icons/bi"; 
import { BiBookHeart } from "react-icons/bi"; 
import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './pageComponents/ProductItem'

const Favourite = () => {
  const { favourite } = useSelector(state => state.pageAction)
  return (
    <div className='px-[7.5%] py-[40px]'>
      {
        favourite.length === 0 ?
          <div>
            <h2 className="text-[32px] text-center sm:text-[37px] font-bold mb-[20px] text-gray-500">Your wishlist is empty</h2>
            <div className="h-[50vh] w-full flex justify-center items-center text-[90px] text-gray-500 ">
                <BsFillBox2HeartFill className="animate-bounce duration-1000" />              
            </div>
          </div>
          :
          <div>
            <h2 className="text-[23px] sm:text-[26px] font-bold mb-[20px]">Your favourite products</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
              {
                favourite?.map((item) => {
                  return <ProductItem item={item} key={item.id} />
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Favourite
