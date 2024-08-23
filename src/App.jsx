import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Favourite from './pages/Favourite'
import Basket from './pages/Basket'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Home from './pages/Home'
import './App.css'
import Products from './pages/products/Products'
import ProductDetail from './pages/ProductDetail'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:slug' element={<ProductDetail/>}/>
      </Route>
    )
  )
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
