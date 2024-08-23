import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import logo from '../images/icons/logo-vector.png'
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='px-[7.5%] py-[80px] bg-black text-center sm:text-start'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px] text-white ">
        <div className="sm:col-span-2">
          <div className="mb-[20px] flex justify-center sm:justify-start">
            <img src={logo} alt="" />
          </div>
          <p className="w-full text-center sm:text-start  ">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className="text-[14px] flex flex-col gap-[10px] font-[300]">
          <p className="text-[16px] font-[600]">Services</p>
          <Link>Bonus program</Link>
          <Link>Gift cards</Link>
          <Link>Credit and payment</Link>
          <Link>Service contracts</Link>
          <Link>Non-cash account</Link>
          <Link>Payment</Link>
        </div>
        <div className="text-[14px] flex flex-col gap-[10px] font-[300]">
          <p className="text-[16px] font-[600]">Assistence to the buyer</p>
          <Link>Find an order</Link>
          <Link>Terms of delivery</Link>
          <Link>Exchange and return of goods</Link>
          <Link>Guarantee</Link>
          <Link>Frequently asked questions</Link>
          <Link>Terms of use of the site</Link>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start gap-[30px] text-white text-[22px] mt-[40px]">
        <span className="cursor-pointer hover:scale-[1.2] duration-200"><BsTwitter /></span>
        <span className="cursor-pointer hover:scale-[1.2] duration-200"><CgFacebook /></span>
        <span className="cursor-pointer hover:scale-[1.2] duration-200"><BsTiktok /></span>
        <span className="cursor-pointer hover:scale-[1.2] duration-200"><BsInstagram /></span>
      </div>
    </div>
  )
}

export default Footer
