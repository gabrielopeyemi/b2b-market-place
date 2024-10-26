'use client'
import Image from 'next/image'
import React from 'react'
import images from './../../assets/images/request-successful-bg.jpeg'
import Iconify from './../../components/elements/icon'
import { useRouter } from 'next/navigation'

const RequestSent = () => {
const router = useRouter()
  return (
    <section className="mb-20">
<div className="relative">
    <Image src={images} layout="responsive" alt="landing page image" className="w-full h-50  "/>
    <div className="bg-[rgb(255,255,255,0.9)]  p-8 py-14 rounded-xl absolute  top-16 left-16 ">
        <h1 className='text-3xl flex gap-2 items-center font-semibold'>
            <Iconify icon='emojione-monotone:white-heavy-check-mark' className='text-primary'/>
            <p className='text-text'>Request sent</p>
        </h1>
        <div className='mt-4 text-sec text-lg '>
            <p>The prospective partner will look at your request, and let you know  </p>
            <p>their decision. A notification will be sent to you if accepted or declined.</p>
        </div>

        <div className='mt-8 '>
            <button onClick={()=>router.push('/view-partnership')} className='bg-primary text-white px-16 rounded-lg py-4'>View</button>
        </div>

    </div>
  </div>
</section>
  )
}

export default RequestSent