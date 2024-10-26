import React from 'react'
import Iconify from '../elements/icon'
import Image from 'next/image'
import logowhite from "./../../assets/images/cog-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#001F38] text-white px-40 py-20 pb-10">
    <div className="flex justify-between mb-auto items-start mr-40 flex-wrap">
      <div className="">
        <div className="flex flex-col mb-auto -mt-6 ">
          <Image src={logowhite} alt="logo" className='' />
          <p className='ml-6'>hello@cog.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-auto">
        <h2 className="text-lg font-semibold">Company</h2>
        <p>About us</p>
        <p>Partners</p>
        <p>Careers</p>
        <p>Media</p>
        <p>Contact us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Features</h2>
        <p>Partner</p>
        <p>Invoicing</p>
        <p>Partnership request</p>
   
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Resources</h2>
        <p>Testimonials</p>
        <p>Blog</p>
        <p>Hel</p>
        <p>Media</p>
        <p>Contact us</p>
      </div>
   
    </div>

    <div className="mt-16 border-t-2 border-[#F7FBFD] flex justify-between pt-10 items-center">
 <div className="flex gap-4 items-center">
 <div className="flex gap-2 text-3xl">
  <Iconify icon="ri:twitter-fill"/>
  <Iconify icon="ri:linkedin-fill"/>
  <Iconify icon="ri:facebook-fill"/>
  <Iconify icon="ri:youtube-fill"/>
</div>
<div className="flex gap-4">
  <p>Privacy policy</p>
  <p>Terms of Service</p>
</div>
 </div>
 <div className="">
  <p>	&#169; 2023 E-vent All rights reserved</p>
 </div>
    </div>
  </footer>  )
}

export default Footer