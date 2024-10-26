'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images/COG-Logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const pathName = usePathname()

  return (
    <div className=''>
        <div className="  flex p-4 px-8 justify-between items-center">
            <div className="">
                <Image src={logo} alt='logo'/>
            </div>
            <div className="flex gap-6 text-sec  font-semibold">
                <div className="flex flex-col  items-center ">
                <Link className={`${pathName==='/'&& 'text-primary  duration-200'} duration-200`} href={'/'}>Home</Link>
                {pathName==='/'&& <p className=' h-1 w-1 bg-primary rounded-full'></p>}
                </div>
                <div className="flex flex-col  items-center ">
                <Link className={`${pathName==='/navigations/categories'&& 'text-primary  duration-200'} duration-200`} href={'/navigations/categories'}>Categories</Link>
                {pathName==='/navigations/categories'&& <p className=' h-1 w-1 bg-primary rounded-full'></p>}  
                </div>
                <div className="flex flex-col  items-center ">
                <Link className={`${pathName==='/navigations/partnership-requested'&& 'text-primary '} duration-200`} href={'/navigations/partnership-requested'}>Partnership Request</Link>
                {pathName==='/navigations/partnership-requested'&& <p className=' h-1 w-1 bg-primary rounded-full'></p>}
                </div>
                <div className="flex flex-col  items-center ">
                <Link className={`${pathName==='/navigations/about'&& 'text-primary '} /navigations/categories`} href={''}>About us</Link>
                {pathName==='/navigations/about'&& <p className=' h-1 w-1 bg-primary rounded-full'></p>}
                </div>
            </div>
            <div className="flex gap-4 items-center font-semibold">
                <div className="">Login</div>
                <div className="flex">
                    <button className='text-primary border-2 border-primary p-2 px-3'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar