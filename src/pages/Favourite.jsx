import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './pageComponents/ProductItem'

const Favourite = () => {
  const { favourite } = useSelector(state => state.pageAction)
  return (
    <div className='px-[7.5%] py-[40px]'>
      <h2 className="text-[23px] sm:text-[26px] font-bold mb-[20px]">Your favourite products</h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
        {
          favourite?.map((item) => {
            return <ProductItem item={item} key={item.id} />
          })
        }
      </div>
    </div>
  )
}

export default Favourite
