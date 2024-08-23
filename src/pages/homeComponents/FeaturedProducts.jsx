import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const FeaturedProducts = () => {
    const { products } = useSelector(state => state.product)
    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
            {
                products?.map((item, index) => {
                    if(index>=2 && index < 10) return <ProductItem item={item} key={item.id}/>
                })
            }
        </div>
    )
}

export default FeaturedProducts
