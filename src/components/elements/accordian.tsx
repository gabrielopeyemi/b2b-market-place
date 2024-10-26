import React from 'react'
import Iconify from './icon'

const Arccordian = () => {
  return (
    
    <div className="mt-10  flex flex-col gap-6">
    <div className=" h-16 px-5 text-lg w-full outline-1 border-[#8D8D8D] border-[1px] flex items-center justify-between ">
      <p>What is COG for Engineers?</p>
    <Iconify icon="mingcute:down-line"/>
    </div> 
    <div className=" h-16 px-5 text-lg w-full outline-1 border-[#8D8D8D] border-[1px] flex items-center justify-between ">
      <p>How secure are my bids and project documents?</p>
    <Iconify icon="mingcute:down-line"/>
    </div> 
    <div className=" h-16 px-5 text-lg w-full outline-1 border-[#8D8D8D] border-[1px] flex items-center justify-between ">
      <p>How secure are my practice and legal documents?</p>
    <Iconify icon="mingcute:down-line"/>
    </div> 
    <div className=" h-16 px-5 text-lg w-full outline-1 border-[#8D8D8D] border-[1px] flex items-center justify-between ">
      <p>How secure are my practice and legal documents?</p>
    <Iconify icon="mingcute:down-line"/>
    </div> 
   </div>
  )
}

export default Arccordian