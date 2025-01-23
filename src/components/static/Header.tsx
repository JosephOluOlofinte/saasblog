// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../block"

const Header = () => {
  return (
    <Fragment>
      <header className="w-[100%] h-[75px] bg-absoluteWhite flex justify-center border-b-[2px] border-b-[#E9EFF2]">
        <div className="w-[90%] h-[100%] flex justify-between items-center">
          <div>
            <h1 className="text-[28px] font-extrabold">SaaS Blog</h1>
          </div>
          <nav className="">
            <ul className="flex gap-[10px] items-center font-medium">
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50 hidden lglaptop:inline"><li>Email Marketing</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50 hidden lglaptop:inline"><li>Content Marketing</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50 hidden lglaptop:inline"><li>SEM</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50 hidden lglaptop:inline"><li>SMM</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50 hidden tablet:inline"><li>Services</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50 hidden tablet:inline"><li>About</li></a>
              <li><Button type="button" text="Contact" variant="primary" size="medium" url="#" /> </li>
              <li className="ml-2  p-[4px] tablet:hidden cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[34px] w-[34px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg></li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  )
}

export default Header