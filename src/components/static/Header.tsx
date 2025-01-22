// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../block"

const Header = () => {
  return (
    <Fragment>
      <header className="w-[100%] h-[75px] flex justify-center">
        <div className="w-[90%] h-[100%] flex justify-between items-center ">
          <div>
            <h1>LOGO</h1>
          </div>
          <nav>
            <ul className="flex gap-[20px] items-center font-medium">
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50"><li>Email Marketing</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50"><li>Content Marketing</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50"><li>SEM</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50"><li>SMM</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50"><li>Services</li></a>
              <a href="#" className="py-[15px] px-[25px] hover:bg-blue-50 ease-in-out duration-500 focus:bg-blue-50"><li>About</li></a>
              <li><Button type="button" text="Contact" variant="primary" size="medium" url="#" /> </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  )
}

export default Header