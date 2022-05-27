import React from 'react'
import TwoSpacedRec from './TwoSpacedRec'
import OneSpacedRec from './OneSpacedRec'
import D2Logo from '../public/dt2logo.png'

const Platform = "Platform"
const dota2 = "Dota 2"

function Content() {
  return (
    <div className="h-[502px] bg-[#8A2424]">
        
        <div className="space-y-[2.5px]">    
            <h1 className="pt-[25px] text-center text-[15px] font-semibold text-white">
                DOTA 2 Boosting Service
            </h1>
            <h2 className="text-center text-[12px] font-normal text-white opacity-50">
                Boosting in every servers.
            </h2>
        </div>

        <div className="h-[390px] w-[430px] border border-[#D47E7E] bg-[#802525] mx-auto mt-[12px] rounded-[15px]">
          
          <h1 className="text-center font-medium opacity-50 text-[10px] text-[#FFA7A7] pt-[15px]">
            Calculate the price of your boost.
          </h1>

          <div className="flex">
          <TwoSpacedRec heading={Platform} value={dota2} logo={D2Logo} />

          </div>
        </div>
    </div>
  )
}

export default Content