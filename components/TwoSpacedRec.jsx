import React from 'react'
import Image from 'next/image'

function TwoSpacedRec({heading, value, logo}) {
  return (
    <div className="flex bg-[#8A2424] w-[120px] h-[28px] ml-[20px] border border-[#DF6363] rounded-[20px] mt-[50px]">
        <div className="flex h-[100%] w-[32px] border-r border-r-[#DF6363] content-center pt-[9px] pl-[11px]">
            <Image
                src={logo}
                alt="Picture of Dota 2 Logo"
                width="10px"
                height="10px"
                layout="fixed"
            />
        </div>

        <div className="pl-1 -space-y-[5px]">
          <h1 className="font-light text-[7px] opacity-70 text-gray-100">{heading}</h1>
          <h2 className="text-gray-100 italic text-[13px]">{value}</h2>
        </div>
    </div>
  )
}

export default TwoSpacedRec