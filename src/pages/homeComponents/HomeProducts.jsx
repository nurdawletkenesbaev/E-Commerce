import React from 'react'
import NewArrivals from './NewArrivals'
import Bestseller from './BestSeller'
import FeaturedProducts from './FeaturedProducts'
import { useDispatch, useSelector } from 'react-redux'
import { selectHomeProducts } from '../../store/slices/pageActionSlice'

const HomeProducts = () => {
    const dispatch = useDispatch()
    const {selectedHomeProducts} = useSelector(state => state.pageAction)
    // console.log(selectedHomeProducts)
    return (
        <div className='px-[7.5%]'>
            <div className='flex text-[14px] sm:text-[17px] font-bold justify-between sm:justify-start sm:gap-[30px]'>
                <span onClick={() => dispatch(selectHomeProducts('newArrivals'))} className={`${selectedHomeProducts === 'newArrivals' ? 'border-b-[1px] border-black' : ''} cursor-pointer w-max`}>New Arrivals</span>
                <span onClick={() => dispatch(selectHomeProducts('bestseller'))} className={`${selectedHomeProducts === 'bestseller' ? 'border-b-[1px] border-black' : ''} cursor-pointer w-max`}>Bestseller</span>
                <span onClick={() => dispatch(selectHomeProducts('featuredProducts'))} className={`${selectedHomeProducts === 'featuredProducts' ? 'border-b-[1px] border-black' : ''} cursor-pointer w-max`}>Featured Products</span>
            </div>
            <div className='mt-[30px]'>
                {
                    selectedHomeProducts === 'newArrivals' ? <NewArrivals/> : <></>
                }        
                {
                    selectedHomeProducts === 'bestseller' ? <Bestseller/> : <></>
                }        
                {
                    selectedHomeProducts === 'featuredProducts' ? <FeaturedProducts/> : <></>
                }
            </div>
        </div>
    )
}

export default HomeProducts
