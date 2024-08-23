import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryData } from '../store/slices/categorySlice'
import { fetchProductData } from '../store/slices/productSlice'
import { useInView } from 'react-intersection-observer'

const MainLayout = () => {
  const dispatch = useDispatch()
  const categoryUrl = 'https://electronics-data-1f9x.onrender.com/categories'
  const productUrl = 'https://electronics-data-1f9x.onrender.com/products'
  useEffect(() => {
    dispatch(fetchCategoryData(categoryUrl))
    dispatch(fetchProductData(productUrl))
  }, [])
  const { categories } = useSelector(state => state.category)
  const { products } = useSelector(state => state.product)

  const {pathname} = useLocation()
  const wrapperRef = useRef()

  useEffect(() => {
    wrapperRef.current.scrollTop = 0
  }, [pathname])

  const {ref, inView} = useInView({})

  return (
    <div ref={ref}  className={`bg-white text-black relative ${inView ? 'top-0 opacity-100' : 'top-30px opacity-0'} duration-500`}>
      <Header />
      <div ref={wrapperRef} className='min-h-[calc(100vh-70px)] max-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-120px)] lg:max-h-[calc(100vh-120px)] overflow-y-auto'>
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
