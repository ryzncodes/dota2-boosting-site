import React from 'react'
import Image from 'next/image'
import D2Logo from '../public/dt2logo.png'

function TwoSpacedRec() {
  return (
    <div className="bg-[#8A2424] w-[120px] h-[28px] ml-[20px] border border-[#DF6363] rounded-[20px]">
        <div className="flex h-[100%] w-[32px] border border-r-red-700 content-center pt-[9px] pl-[11px]">
            <Image
                src={D2Logo}
                alt="Picture of Dota 2 Logo"
                width="10px"
                height="10px"
                layout="fixed"            
            />
        </div>
    </div>
  )
}

export default TwoSpacedRec