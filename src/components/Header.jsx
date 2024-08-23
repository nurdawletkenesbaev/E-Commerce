import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";
import { BiCamera } from "react-icons/bi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsTv } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaTabletAlt } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React from 'react'
import logo from '../images/icons/Logo.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/slices/pageActionSlice";


const Header = () => {
  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.category)
  const { favourite } = useSelector(state => state.pageAction)
  const { isOpenMenu } = useSelector(state => state.pageAction)
  return (
    <header className=" sticky z-[100] top-0 bg-white lg:relative">
      <nav className="px-[7.5%] relative border-b-[1px] border-gray-400 bg-white z-20 flex justify-between gap-[30px] h-[70px] items-center">
        <div className="bg-white">
          <img src={logo} alt="" className="w-full" />
        </div>

        <div className="flex justify-center gap-[30px] items-center text-[16px] text-gray-400 font-[400]">
          <div className="relative hidden sm:flex">
            <input type="text" placeholder='Search' className="py-[10px] px-[35px] border-none bg-gray-100 rounded-md outline-blue-400 text-black w-[300px]" />
            <button className="absolute top-[14px] left-[10px] text-gray-400">
              <BsSearch />
            </button>
          </div>
          <div className="hidden lg:flex gap-[30px] items-center">
            <Link to={'/'} className="text-gray-900">Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/'}>Contact Us</Link>
            <Link to={'/'}>Blog</Link>
            <Link to={'/favourite'} className="relative">
              <AiOutlineHeart className="text-[20px] text-black font-medium" />
              <div className="absolute w-[15px] h-[15px] flex items-center justify-center bg-white top-[-7px] right-[-7px] text-[11px] text-black font-semibold border-[1px] border-black rounded-full">
                {favourite?.length}
              </div>
            </Link>
            <Link to={'/basket'} className="relative">
              <AiOutlineShoppingCart className="text-[20px] text-black font-medium" />
              <div className="absolute w-[15px] h-[15px] flex items-center justify-center bg-white top-[-7px] right-[-7px] text-[11px] text-black font-semibold border-[1px] border-black rounded-full">
                {favourite?.length}
              </div>
            </Link>
          </div>
          <button onClick={() => dispatch(toggleMenu())} className="text-black text-[20px] flex lg:hidden">
            {isOpenMenu ? <CgClose />
              : <AiOutlineMenu />
            }
          </button>

        </div>
      </nav>
      <div className="bg-[#2E2E2E] hidden lg:flex justify-between  items-center py-[10px] px-[7.5%] h-[50px]">
        {
          categories.map((item, index) => {
            if (index < 6) return <div key={item.id} className={`text-gray-400 w-full flex justify-center items-center gap-[5px] ${index === 5 ? 'border-r-[1px] ' : ''} border-l-[1px] border-gray-400`}>
              {eval(item.icon)()}
              <p>{item.title}</p>
            </div>
          })
        }
      </div>

      <nav className={`w-full  bg-gray-50 absolute ${isOpenMenu ? 'top-[70px]' : 'top-[-340px]'} duration-200 ease-linear z-10`}>
        <div className="flex py-[20px] px-[7.5%] flex-col bg-gray-50 justify-center gap-[30px] items-center text-[16px] text-gray-900 font-[400]">
          <div className="relative w-full sm:hidden">
            <input type="text" placeholder='Search' className="py-[10px] px-[35px] w-full rounded-md outline-blue-400 text-black bg-gray-100 border-[1px] border-blue-400 " />
            <button className="absolute top-[14px] left-[10px] text-gray-400">
              <BsSearch />
            </button>
          </div>
          <div className="flex flex-col items-center font-[500] w-full">
            <Link onClick={() => dispatch(toggleMenu())} to={'/'} className="hover:bg-gray-200 h-full w-full py-[10px] text-center rounded-md">Home</Link>
            <Link onClick={() => dispatch(toggleMenu())} to={'/products'} className="hover:bg-gray-200 h-full w-full py-[10px] text-center rounded-md">Products</Link>
            <Link onClick={() => dispatch(toggleMenu())} to={'/'} className="hover:bg-gray-200 h-full w-full py-[10px] text-center rounded-md">Contact Us</Link>
            <Link onClick={() => dispatch(toggleMenu())} to={'/'} className="hover:bg-gray-200 h-full w-full py-[10px] text-center rounded-md">Blog</Link>
            <div className="flex justify-start w-full">
              <Link onClick={() => dispatch(toggleMenu())} to={'/favourite'} className="pt-[20px] rounded-md relative flex flex-col justify-center items-center hover:bg-gray-200 p-[10px] w-[50%]">
                <AiOutlineHeart className="text-[20px] text-black font-medium" />
                <span>Favourite</span>
                <div className="absolute w-[15px] h-[15px] flex items-center justify-center bg-white top-[11px] right-[50%] translate-x-[19px] text-[11px] text-black font-semibold border-[1px] border-black rounded-full">
                  {favourite?.length}
                </div>
              </Link>
              <Link onClick={() => dispatch(toggleMenu())} to={'/basket'} className="pt-[20px] rounded-md relative flex flex-col justify-center items-center hover:bg-gray-200 p-[10px] w-[50%]">
                <AiOutlineShoppingCart className="text-[20px] text-black font-medium" />
                <span>Basket</span>
                <div className="absolute w-[15px] h-[15px] flex items-center justify-center bg-white top-[11px] right-[50%] translate-x-[20px] text-[11px] text-black font-semibold border-[1px] border-black rounded-full">
                  {favourite?.length}
                </div>
              </Link>
            </div>
          </div>

        </div>
      </nav>

    </header>
  )
}

export default Header
