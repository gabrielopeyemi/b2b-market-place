
import Image from "next/image";
import landingImage from './../assets/images/landing-image.png'
import Vector1 from './../assets/images/vector11.png'
// import Vector2 from './../assets/images/vector2.png'
import rect1 from './../assets/images/rect-1.png'
import Border from './../assets/images/border.png'
import project1 from './../assets/images/projects1.png'
import project2 from './../assets/images/projects2.png'
import project3 from './../assets/images/projects3.png'
import project4 from './../assets/images/projects4.png'
import note from './../assets/images/note.png'
import note2 from './../assets/images/note2.png'
import note3 from './../assets/images/note3.png'

import Navbar from "../components/layouts/navbar";
import Iconify from "../components/elements/icon";
import Number from "../components/elements/number";
import Arccordian from "../components/elements/accordian";
import Footer from "../components/layouts/footer";



export default function Home() {
  return (
 <main className="">
  <Navbar/>
<section className="mb-20">
<div className="relative">
    <Image src={landingImage} layout="responsive" alt="landing page image" className="w-full "/>
    <div className="absolute w-full top-40 flex justify-center items-center z-10">
    <div className="">
    <div className="">
      <Image src={Vector1} alt="vector"/>
    </div>
      <div className="text-6xl font-bold text-white p-3 px-10 text-center">
        <p>Partner with other EPC</p> 
        <p>organizations</p>
        </div>
    
      <div className="flex justify-end w-full">
        {/* <Image src={Vector2} alt="vector"/> */}
      </div>
      <div className="flex justify-center">
        <button className="text-white  bg-primary p-3 mt-4 px-5 text-lg font-semibold ">Learn more</button>
      </div>
    </div>
    </div>
<div className="flex w-full bottom-0 -m-12  justify-center items-center absolute">
<div className="flex justify-center gap-6  top-10  items-center  py-6 px-8 bg-white rounded-lg shadow-lg ">
<div className="flex items-center gap-1 h-12 w-[25rem] ">
<Iconify className="text-xl font-semibold text-sec" icon="circum:search"/>
<input className="w-full h-full pl-2 " type="text" placeholder="What type of contractor/vendor are you looking for?"/>
</div>
<div className="flex items-center h-12  gap-1 pl-4 w-[24rem] border-l-2 border-[#CCD1D4]">
<Iconify icon="hugeicons:location-01" className="text-xl font-semibold text-sec"/>
<input className="w-full h-full pl-2" type="text" placeholder="Location"/>
</div>
<div className="flex items-center">
  <button className="text-white bg-primary p-3  px-5 text-lg font-semibold">Search</button>
</div>
</div>
</div>
  </div>
</section>


  <section className="px-40 my-40 ">
    <div className="flex justify-between">
      <div className="w-1/2">
        <h1 className="text-3xl mb-2 font-semibold ">Find Partners</h1>
        <p className="text-xl">Meet other stakeholders in the engineering industry. Reduce the discovery phase of new vendors. Checkout our pre-approved vendors.</p>
      </div>
      <div className="relative">
        <Image src={rect1} alt="some images" className=""/>
        <Image src={Border} alt="some images" className="absolute top-10 right-10 -z-10"/>
      </div>
    </div>
  </section>

  <section className="mb-40">

    <div className="pl-40">
    <h1 className="text-3xl mb-4 font-semibold">Our Recent Activities</h1>
    </div>  
      <div className="flex justify-between flex-wrap w-full">
      <div className="flex-1">
        <Image src={project1} alt="projects" layout="responsive" width={100} height={100} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1">
        <Image src={project2} alt="projects" layout="responsive" width={100} height={100} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1">
        <Image src={project3} alt="projects" layout="responsive" width={100} height={100} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1">
        <Image src={project4} alt="projects" layout="responsive" width={100} height={100} className="object-cover w-full h-full" />
      </div>
    </div>

  </section>

  <section className="m-40">
  <div className="">
    <h1 className="text-3xl mb-4 font-semibold">How It Works</h1>
    <p  className="text-xl">Manage your EPC process from start to finish either as a  contractor or a client</p>
    </div>
    <div className="flex justify-center mt-12">
      <div className="flex justify-center items-center p-2  shadow-custom gap-4 font-semibold rounded-full">
        <button className="px-24 py-5 bg-primary rounded-full text-white">You</button>
        <button className="px-20 py-5 bg-whit rounded-full text-text">Partner</button>
      </div>
    </div>
      <h2 className="font-semibold text-xl text-center mt-6">Streamline your work burden with COG  </h2>
    


    <div className="mt-20 flex justify-between gap-20">
      <div className="border-r-4 pr-10 border-dashed border-primary">
     <div className="mt-6  ">
     <Number number={1}/>
      <h2 className="text-xl font-semibold ">Sign Up and Onboarding</h2>
      <p className="text-lg ">Create an account on the platform by providing necessary details about your  firm. Complete the onboarding process, including verifying your credentials and expertise.</p>
     </div>
     <div className="mt-14">
      <Image src={note} alt="note"/>
     </div>
     <div className=" mt-10">
     <Number number={3}/>
      <h2 className="text-xl font-semibold ">Find and Manage Partners</h2>
      <p className="text-lg ">Send partnership  inquiries to potential partners through the {`platform's`} partner access system. Review and respond to inquiries promptly, providing initial information, invoices and establishing communication.</p>
     </div>
      </div>

      <div className="">

        <Image src={note2} alt="note" className=""/>
        <div className="mt-10 ">
     <Number number={2}/>
      <h2 className="text-xl font-semibold ">Customize Your Profile</h2>
      <p className="text-lg ">Personalize your {`firm's`} profile by adding relevant information such as specialization, past projects, and notable achievements. Showcase your expertise and highlight what sets your firm apart from others.</p>
     </div>

     <Image src={note3} alt="note" className="mt-40"/>

      </div>
    </div>

    <div className="flex justify-center mt-20">
    <button className="text-white  bg-primary p-3 mt-4 px-5 text-lg font-semibold ">Learn more</button>

    </div>

  </section>

  <section className="bg-primary px-40 py-16 mb-20">
    <div className="flex justify-center mb-6">
      <h1 className="text-4xl text-white">What Our Client Says</h1>
    </div>

    <div className="flex justify-between hover:cursor-pointer ">
      <div className="flex justify-center text-primary text-2xl items-center h-10 w-12 rounded-full bg-[#EEEEEE]">
        <Iconify icon="mingcute:left-line"/>
      </div>

      <article className="text-center mx-16 ">
        <blockquote className="text-white">“Usually, We got our first equipment through COG. We saw their bulldozers after we sent initial discussions and had a call. Would recommend to other contractors!”</blockquote>
        
        <p className="text-white font-semibold mt-4 ">Struct-Build Construction</p>
        <p className="text-white font-semibold">Project Management Company</p>
      </article>

      <div className="flex justify-center hover:cursor-pointer text-primary text-2xl items-center h-10 w-12 rounded-full bg-[#EEEEEE]">
        <Iconify icon="mingcute:right-line"/>
      </div>
    </div>
  
  </section>

  <section className="m-40">
    <div className="flex gap-20 ">
      <div className="w-1/2">
       <div className="font-semibold text-3xl flex justify-center"> <h1>Request a demo</h1></div>

       <form action="" className="mt-10 flex flex-col gap-6 ">
        <input type="text" placeholder="Full Name" className=" h-14 px-5 placeholder:text-black text-lg w-full outline-1 outline-primary border-[#8D8D8D] border-[1px]" />
        <input type="email" placeholder="Email Address" className=" h-14 px-5 placeholder:text-black text-lg w-full outline-1  outline-primary border-[#8D8D8D] border-[1px]" />
        <input type="text" placeholder="Service" className=" h-14 px-5 placeholder:text-black text-lg w-full outline-1  outline-primary border-[#8D8D8D] border-[1px]" />
        <textarea  placeholder="Message" className=" h-40 px-5 placeholder:text-black text-lg w-full outline-1  outline-primary border-[#8D8D8D] border-[1px]" />
        <div className="">
    <button className="text-white  bg-primary p-3 mt-4 px-6 text-lg font-semibold ">Submit</button>

        </div>
       </form>

      </div>

      <div className="w-1/2">
      <div className="font-semibold text-3xl flex justify-center"> <h1>Frequently asked questions</h1></div>
      <Arccordian/>
      </div>
    </div>
  </section>


 <Footer/>
 </main>
  );
}
