import profie from './../../../assets/images/profile-photo.png'
import Iconify from './../../../components/elements/icon'
import rect1 from './../../../assets/images/square-1.png'
import rect2 from './../../../assets/images/square-2.png'
import rect3 from './../../../assets/images/square-3.png'
import rect4 from './../../../assets/images/square-4.png'
import square1 from './../../../assets/images/rect-1 copy.png'
import square2 from './../../../assets/images/rect-2.png'
import square3 from './../../../assets/images/rect-3.png'
import square4 from './../../../assets/images/rect-4.png'
import square5 from './../../../assets/images/rect-5.png'
import Link from 'next/link'
import Image from 'next/image'


const Profile = () => {
  return (
    <div>
        <div className="w-full p-5 lg:px-10 lg:py-20 space-y-10 lg:space-y-20">
        <div className=''>
        <header className='relative bg-center bg-profile-custom w-full p-52 mb-40'>
					<div className="absolute top-[85%] mt-6 w-10/12 left-20 flex justify-between items-end">
                        <div className="flex gap-6 items-end pb-2">
                            <Image src={profie} alt="" />
                            <div className="">
                                <h1 className='text-[#001827] text-2xl font-semibold mb-2'>Montfori Project Managers</h1>
                                <div className="flex gap-4 items-end">
                                    <p className='text-primary font-semibold border-2 rounded-lg border-primary bg-[#83cff933] p-2 px-4'>Civil Engineering Contractors</p>
                                    <div className="font-semibold text-[#C2E1EF] flex items-center gap-2">
                                        <Iconify icon='akar-icons:location' className='font-semibold'/>
                                        <p className='text-[#4B5B65]'> Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2 font-semibold">
                                <p className='text-[#4B5B65]'>Replies within:</p>
                                <p className='text-primary'>5 hours</p>
                            </div>
                            <div className="">
                                <Link href={'/request-personnel'} className='text-white decoration-none rounded-lg p-4 font-semibold bg-[#0077C2]'>Request Partnership </Link>
                            </div>
                        </div>
                    </div>
				</header>

			
			</div>
        </div>

        {/* ///// */}
        <div className="mb-40 mx-24 flex gap-4">
            <div className="rounded-lg bg-[#F9F9F980] p-4 w-3/4">
                <div className="text-[#001827] text-xl mb-2">About</div>
                <p className="text-[#001827]">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl</p>
                <div className="mt-4">
                    <h1 className='text-[#001827] text-xl'>Specialization</h1>
                    <div className="flex mt-3 gap-4 flex-wrap">
                        <div className="p-2 px-4 border-2 rounded-lg border-primary text-primary">Project Management</div>
                        <div className="p-2 px-4 border-2 rounded-lg border-primary text-primary">Design</div>
                        <div className="p-2 px-4 border-2 rounded-lg border-primary text-primary">EPC</div>
                        <div className="p-2 px-4 border-2 rounded-lg border-primary text-primary">Geotechnics</div>
                    </div>
                </div>
            </div>
            <div className="rounded-lg bg-[#F9F9F980]  p-4 ">
            <div className="text-[#001827] text-xl font-semibold pr-14">Contact Information</div>
            <div className="mt-3 flex flex-col gap-3">
            <div className="flex justify-between items-center ">
                  <div className="font-semibold text-[#4B5B65]">Phone number</div>
              <Iconify icon='solar:phone-outline' className='text-primary text-lg'/>
                 </div>
            <div className="flex justify-between items-center ">
                  <div className="font-semibold text-[#4B5B65]">Email</div>
              <Iconify icon='hugeicons:mail-02' className='text-primary text-lg'/>
                 </div>
            <div className="flex justify-between items-center ">
                  <div className="font-semibold text-[#4B5B65]">Website</div>
              <Iconify icon='hugeicons:mail-02' className='text-primary text-lg '/>
                 </div>
            </div>

                <div className="mt-4">
                    <h1 className='text-[#001827] text-xl font-semibold'>Overall Rating</h1>
                    <div className="flex gap-1 mt-1 items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                        <div className="text-[#001827] ml-1 font-semibold">4.8</div>
                    </div>
                </div>
            </div>
        </div>

        {/* ///// */}
        <div className="mb-40 mt-40 mx-24 flex gap-4 gap-y-24 flex-col">
            <div className="">
            <h1 className='text-[#001827] text-3xl font-semibold mb-2'>Portfolio</h1>
            <div className="mt-8 flex gap-10 flex-wrap">
                <div className="">
                    <Image src={rect1} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>Construction of Abule-jesha road</p>
                    </div>
                </div>
                <div className="">
                    <Image src={rect2} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>Renovation of National Theatre, Lagos</p>
                    </div>
                </div>
                <div className="">
                    <Image src={rect3} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>Project Management of Eko Atlantic Dredging</p>
                    </div>
                </div>
                <div className="">
                    <Image src={rect4} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>Furniture design for University of Lagos</p>
                    </div>
                </div>
            </div>

            </div>
            <div className="">
            <h1 className='text-[#001827] text-3xl font-semibold mb-2'>Products and Services </h1>
            <div className="mt-8 flex gap-10 flex-wrap">
                <div className="">
                    <Image src={rect1} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>EPC</p>
                    </div>
                </div>
                <div className="">
                    <Image src={rect2} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>Construction Systems design</p>
                    </div>
                </div>
                <div className="">
                    <Image src={rect3} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>Staff Training</p>
                    </div>
                </div>
                <div className="">
                    <Image src={rect4} alt="some picture"  className='rounded-lg'/>
                    <div className="mt-2">
                        <p className='font-semibold text-lg text-[#001827] '>Swimming pool waterproofing</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
        {/* ////////// */}
        <div className="mb-40 mt-40 mx-24 flex gap-4  ">
            <div className="">
                <div className="flex justify-between items-center ">
                <h1 className='text-[#001827] text-3xl font-semibold mb-4'>Reviews (449) </h1>
                <div className=""><button className='p-4 rounded-lg text-primary border-2 border-primary font-semibold '>Write a review</button></div>
                </div>
            <div className="mt-8 flex gap-8 items-center">
                <div className=" border-2 border-[#4B5B65] flex flex-col gap-4 justify-center items-center p-4 rounded-lg">
                    <div className="">
                        <p className='text-[#001827] text-2xl font-semibold text-center mb-2'>4.6</p>
                        <div className="flex gap-1 mt-1 items-center text-sm">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                    
                    </div>
                    <div className="mt-3">
                        <p className='text-[#4B5B65]'>449 ratings</p>
                    </div>
                    </div>
                </div>

                <div className="flex gap-6 justify-between flex-wrap  h-1/2">
                    <div className="bg-[#F9F9F9] p-4  px-8 rounded-lg ">
                        <p className='text-[#001827] font-semibold text-lg '>Communications</p>
                        <div className="flex gap-1 mt-1 items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                        <div className="text-[#001827] ml-1 font-semibold">4.8</div>
                    </div>
                    </div>
                    <div className="bg-[#F9F9F9] p-4  px-8 rounded-lg ">
                        <p className='text-[#001827] font-semibold text-lg '>Communications</p>
                        <div className="flex gap-1 mt-1 items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                        <div className="text-[#001827] ml-1 font-semibold">4.8</div>
                    </div>
                    </div>
                    <div className="bg-[#F9F9F9] p-4  px-8 rounded-lg ">
                        <p className='text-[#001827] font-semibold text-lg '>Communications</p>
                        <div className="flex gap-1 mt-1 items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                        <div className="text-[#001827] ml-1 font-semibold">4.8</div>
                    </div>
                    </div>
                    <div className="bg-[#F9F9F9] p-4  px-8 rounded-lg ">
                        <p className='text-[#001827] font-semibold text-lg '>Communications</p>
                        <div className="flex gap-1 mt-1 items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                        <div className="text-[#001827] ml-1 font-semibold">4.8</div>
                    </div>
                    </div>
                    <div className="bg-[#F9F9F9] p-4  px-8 rounded-lg ">
                        <p className='text-[#001827] font-semibold text-lg '>Communications</p>
                        <div className="flex gap-1 mt-1 items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                        <div className="text-[#001827] ml-1 font-semibold">4.8</div>
                    </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
        {/* ///// */}
        <div className="mb-40 mt-40 mx-24 gap-4  ">
            <div className='mb-6'>
            <h1 className='text-[#001827] text-2xl font-semibold mb-2'>Gallery</h1>

            </div>
            <div className="flex gap-10">
                <div className="">
                    <Image src={square1} alt="something" className='rounded-lg' />
                </div>
                <div className="">
                    <Image src={square2} alt="something" className='rounded-lg' />
                </div>
                <div className="">
                    <Image src={square3} alt="something" className='rounded-lg' />
                </div>
                <div className="">
                    <Image src={square4} alt="something" className='rounded-lg' />
                </div>
                <div className="relative">
                    <div className="absolute top-1/3 left-1/3"><p className='text-3xl text-white font-semibold'>+21</p></div>
                    <Image src={square5} alt="something" className='rounded-lg' />
                </div>
             
            </div>
        </div>
        {/* ///// */}
        <div className="mb-40 mt-40 mx-24 gap-4 ">
       <div className="flex items-center justify-between">
       <div className="text-2xl flex gap-2 font-semibold">
                <div className="text-[#55656F]">Sort by: </div>
                <div className="flex gap-1 items-center text-[#001827]">
                    <p className=''>Highest rating</p>
                    <Iconify icon='ep:arrow-down-bold'/>
                </div>
            </div>
            <p className='text-xl font-semibold text-primary'>View more reviews</p>
       </div>

            <div className="flex gap-4 mt-6 ">
                <div className="bg-[#F9F9F9] border-2 rounded-lg p-4 border-[#CCD1D4]">
                <div className="flex gap-1 mt-1 text-2xl items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                    </div>
                        <div className="text-[#001827] ml-1 text-xl mt-3 font-semibold">Pateint care</div>
                        <div className="text-[#4B5B65]">Adeola reviewed on 19 Jun 2023</div>
                        <div className="">
                            <div className="text-[#001827] font-medium mt-3">
                        I had the pleasure of working with Amanda as an event planner and I highly recommend her services.{` Amanda's`} attention to detail, organization huhuhuhu... <strong className='text-primary'>Read all</strong>
                        </div>
                        </div>
                </div>
                <div className="bg-[#F9F9F9] border-2 rounded-lg p-4 border-[#CCD1D4]">
                <div className="flex gap-1 mt-1 text-2xl items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                    </div>
                        <div className="text-[#001827] ml-1 text-xl mt-3 font-semibold">Outdoor service</div>
                        <div className="text-[#4B5B65]">Adeola reviewed on 19 Jun 2023</div>
                        <div className="">
                            <div className="text-[#001827] font-medium mt-3">
                        I had the pleasure of working with Amanda as an event planner and I highly recommend her services.{` Amanda's`} attention to detail, organization huhuhuhu... <strong className='text-primary'>Read all</strong>
                        </div>
                        </div>
                </div>
                <div className="bg-[#F9F9F9] border-2 rounded-lg p-4 border-[#CCD1D4]">
                <div className="flex gap-1 mt-1 text-2xl items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                    </div>
                        <div className="text-[#001827] ml-1 text-xl mt-3 font-semibold">Emergency situations</div>
                        <div className="text-[#4B5B65]">Adeola reviewed on 19 Jun 2023</div>
                        <div className="">
                            <div className="text-[#001827] font-medium mt-3">
                        I had the pleasure of working with Amanda as an event planner and I highly recommend her services.{` Amanda's`} attention to detail, organization huhuhuhu... <strong className='text-primary'>Read all</strong>
                        </div>
                        </div>
                </div>
                <div className="bg-[#F9F9F9] border-2 rounded-lg p-4 border-[#CCD1D4]">
                <div className="flex gap-1 mt-1 text-2xl items-center">
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star-filled' className='text-[#FFA534]'/>
                        <Iconify icon='pepicons-pop:star' className='text-[#FFA534]'/>
                    </div>
                        <div className="text-[#001827] ml-1 text-xl mt-3 font-semibold">Midnight service</div>
                        <div className="text-[#4B5B65]">Adeola reviewed on 19 Jun 2023</div>
                        <div className="">
                            <div className="text-[#001827] font-medium mt-3">
                        I had the pleasure of working with Amanda as an event planner and I highly recommend her services.{` Amanda's`} attention to detail, organization huhuhuhu... <strong className='text-primary'>Read all</strong>
                        </div>
                        </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Profile