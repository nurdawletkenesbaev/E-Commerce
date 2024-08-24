import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../pageComponents/ProductItem'

const NewArrivals = () => {
    const { products, productLoad } = useSelector(state => state.product)
    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
            {
                productLoad ? [1, 2, 3, 4, 5, 6, 7, 8].map(item => <ProductItem key={item} />)
                    : products?.map((item, index) => {
                        if (index < 8) return <ProductItem item={item} key={item.id} />
                    })
            }
        </div>
    )
}

export default NewArrivals
