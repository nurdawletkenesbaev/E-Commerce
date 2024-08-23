import React from 'react'
import { Link } from 'react-router-dom'
import NewArrivals from './NewArrivals'
import Bestseller from './BestSeller'
import FeaturedProducts from './FeaturedProducts'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from '../../store/store'
import { selectHomeProducts } from '../../store/slices/pageActionSlice'

const HomeProducts = () => {
    const dispatch = useDispatch()
    const {selectedHomeProducts} = useSelector(state => state.pageAction)
    // console.log(selectedHomeProducts)
    return (
        <div className='px-[7.5%]'>
            <div className='flex justify-start gap-[30px]'>
                <span onClick={() => dispatch(selectHomeProducts('newArrivals'))} className={`${selectedHomeProducts === 'newArrivals' ? 'border-b-[2px] border-black' : ''} cursor-pointer`}>New Arrivals</span>
                <span onClick={() => dispatch(selectHomeProducts('bestseller'))} className={`${selectedHomeProducts === 'bestseller' ? 'border-b-[2px] border-black' : ''} cursor-pointer`}>Bestseller</span>
                <span onClick={() => dispatch(selectHomeProducts('featuredProducts'))} className={`${selectedHomeProducts === 'featuredProducts' ? 'border-b-[2px] border-black' : ''} cursor-pointer`}>Featured Products</span>
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
