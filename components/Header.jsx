import React from 'react'
import Image from 'next/image'
import D2Logo from '../public/dt2logo.png'
import { FiAlignJustify } from "react-icons/fi";

function Header() {
  return (
    <nav className="flex py-[18px] items-center justify-between bg-slate-100">
        <div className="pl-[15px] mt-1">
            <Image
                src={D2Logo}
                alt="Picture of Dota 2 Logo"
                width="58px"
                height="58px"
            />
        </div>

        <div className="flex space-x-[25px]">
            <ul className="navLink">Boosting</ul>
            <ul className="navLink">Calibration</ul>
        </div>

        <div className="pr-[15px] cursor-pointer">
            <FiAlignJustify size={32}/>
        </div>

    </nav>
  )
}

export default Header