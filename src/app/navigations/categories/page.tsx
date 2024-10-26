'use client'
import Iconify from './../../../components/elements/icon'
import Footer from './../../../components/layouts/footer'
import Navbar from './../../../components/layouts/navbar'
import PartnershipCard from './../../../components/shared/partnershipCard'
import React from 'react'
import logistics  from '../../../assets/images/partnership-logistics.png'
import food  from '../../../assets/images/partnership-card-image.jpeg'
import products  from '../../../assets/images/partnership-products.png'


const categories = () => {
  return (
    <div>
        <div className=""><Navbar/></div>
        <section className="">
        <div className="bg-custom bg-cover bg-center w-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 pt-20 w-10/12 pb-14">
                <div className="">
                    <p className='font-semibold text-3xl'>Find Partners</p>
                </div>

                <div className="mt-8 ">
                    <div className="flex gap-3 ">
                       <div className="w w-1/2">
                       <input type="text" className='input ' placeholder='Partner type'/>
                       </div>
                       <div className="w-1/3">
                       <input type="text" className='input' placeholder='Location' />
                       </div>
                    <div className=""><button className='h-12 text-white px-20 rounded-lg bg-primary'>Search </button></div>
                    </div>
                </div>
            </div>
            
        </div>
        </section>

        <section className="my-40 mx-16">
        <div className="">
            <h1 className='font-semibold text-4xl mb-8'>{`Today's`} Stats</h1>
        </div>
          <div className="flex gap-10 text-white">
          <div className="bg-secondary p-8 w-1/3 flex justify-center flex-col gap-4 items-center rounded-lg">
                <div className="h-10 w-10 flex justify-center items-center text-center rounded-full bg-[#EEF6FB] text-[#001827]">
                  <Iconify icon='uis:calender' className='text-2xl'/>
                </div>
                <div className="font-semibold text-center">
                    <p className='text-3xl'>350,000</p>
                    <p className='text-xl'>Total Partners</p>
                </div>
            </div>
      
          <div className="bg-secondary p-8 w-1/3 flex justify-center flex-col gap-4 items-center rounded-lg">
                <div className="h-10 w-10 flex justify-center items-center text-center rounded-full bg-[#EEF6FB] text-[#001827]">
                  <Iconify icon='fluent:people-48-regular' className='text-2xl'/>
                </div>
                <div className="font-semibold text-center">
                    <p className='text-3xl'>100,000</p>
                    <p className='text-xl'>Partnership Created</p>
                </div>
            </div>
      
          <div className="bg-secondary p-8 w-1/3 flex justify-center flex-col gap-4 items-center rounded-lg">
                <div className="h-10 w-10 flex justify-center items-center text-center rounded-full bg-[#EEF6FB] text-[#001827]">
                  <Iconify icon='uil:telegram-alt' className='text-2xl'/>
                </div>
                <div className="font-semibold text-center">
                    <p className='text-3xl'>380,000</p>
                    <p className='text-xl'>Total Partnership requested</p>
                </div>
            </div>
      
          </div>
        </section>
        
        <section className="mx-16 my-20 mb-40">
        <div className="">
            <h1 className='font-semibold text-4xl mb-8'>Featured partners</h1>
        </div>
        <div className="flex justify-evenly gap-10 " >
            <div className="w-1/3">
            <PartnershipCard image={logistics} name='Parallel Facility Co.' type='FACULTY MANAGMENT' location='Benue,Nigeria' rating={4.8} isVerified noOfPartners={156} reviews={112}/>
            </div>
            <div className="w-1/3">
            <PartnershipCard image={food} name='Mastra infrastructure' type='EQUIPMENT' location='Abuja,Nigeria' rating={4.8} isVerified noOfPartners={96} reviews={120}/>
            </div>
            <div className="w-1/3">
            <PartnershipCard image={products} name='Materials supplier Ltd' type='PROCUREMENT' location='Kaduna,Nigeria' rating={4.8} isVerified noOfPartners={12} reviews={32}/>
            </div>
        </div>
        </section>
        
        <div className=""><Footer/></div>
    </div>
  )
}

export default categories