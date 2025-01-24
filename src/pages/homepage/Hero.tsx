// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import blogImg from '../../assets/images/blogimg.png'
import blogImg2 from '../../assets/images/blogimg2.jpg'
import blogImg3 from '../../assets/images/blogimg3.jpg'
import blogImg4 from '../../assets/images/blogimg4.jpg'
import blogImg5 from '../../assets/images/blogimg5.jpg'
import { NavLink } from "react-router-dom"



const Hero = () => {
  return (
    <Fragment>
      <div className="w-[100%] h-fit rounded-[30px] grid gap-[50px] grid-cols-1 laptop:col-span-8 overflow-hidden">
        
        <div className="w-[100%] max-h-[450px] bg-absoluteWhite rounded-[30px] grid grid-cols-1 laptop:col-span-8 overflow-hidden relative text-absoluteWhite adb">
          <img src={blogImg} alt="" />
          <div className="w-[100%] grid absolute bottom-0 px-[30px] py-[15px] shadow-lg backdrop-blur-md backdrop-saturate-[180%] bg-[rgba(0,0,0,0.3)] ">
          <a href="" className="flex items-center gap-[10px] p-[5px] w-fit bg-[#F1ECFF] text-[#6C40FF] rounded-3xl mb-[5px]"><div className="h-[16px] w-[16px] bg-[#6C40FF] rounded-full"></div><p>Artificial Intelligence</p></a>
          <NavLink to="/post-page"><h2 className="text-[1.3rem] lgtablet:text-[1.6rem] leading-7 mb-[5px]">Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers</h2></NavLink>
          <p className="text-[#cfcece] hidden lgtablet:block">By <a href="">Joseph Olu</a></p>
        </div>
        </div>
        
        <div className="w-[100%] max-h-[450px] bg-absoluteWhite rounded-[30px] grid grid-cols-1 laptop:col-span-8 overflow-hidden relative text-absoluteWhite">
          <img src={blogImg2} alt="" />
          <div className="w-[100%] grid absolute bottom-0 px-[30px] py-[15px] shadow-lg backdrop-blur-md backdrop-saturate-[180%] bg-[rgba(0,0,0,0.3)] ">
          <a href="" className="flex items-center gap-[10px] p-[5px] w-fit bg-[#F1ECFF] text-[#6C40FF] rounded-3xl mb-[5px]"><div className="h-[16px] w-[16px] bg-[#6C40FF] rounded-full"></div><p>Artificial Intelligence</p></a>
          <NavLink to="/post-page"> <h2 className="text-[1.3rem] lgtablet:text-[1.6rem] leading-7 mb-[5px]">Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers</h2></NavLink>
          <p className="text-[#cfcece] hidden lgtablet:block">By <a href="">Joseph Olu</a></p>
        </div>
        </div>
        
        <div className="w-[100%] max-h-[450px] bg-absoluteWhite rounded-[30px] grid grid-cols-1 laptop:col-span-8 overflow-hidden relative text-absoluteWhite">
          <img src={blogImg3} alt="" />
          <div className="w-[100%] grid absolute bottom-0 px-[30px] py-[15px] shadow-lg backdrop-blur-md backdrop-saturate-[180%] bg-[rgba(0,0,0,0.3)] ">
          <a href="" className="flex items-center gap-[10px] p-[5px] w-fit bg-[#F1ECFF] text-[#6C40FF] rounded-3xl mb-[5px]"><div className="h-[16px] w-[16px] bg-[#6C40FF] rounded-full"></div><p>Artificial Intelligence</p></a>
          <NavLink to="/post-page"><h2 className="text-[1.3rem] lgtablet:text-[1.6rem] leading-7 mb-[5px]">Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers</h2></NavLink>
          <p className="text-[#cfcece] hidden lgtablet:block">By <a href="">Joseph Olu</a></p>
        </div>
        </div>
        
        <div className="w-[100%] max-h-[450px] bg-absoluteWhite rounded-[30px] grid grid-cols-1 laptop:col-span-8 overflow-hidden relative text-absoluteWhite">
          <img src={blogImg4} alt="" />
          <div className="w-[100%] grid absolute bottom-0 px-[30px] py-[15px] shadow-lg backdrop-blur-md backdrop-saturate-[180%] bg-[rgba(0,0,0,0.3)] ">
          <a href="" className="flex items-center gap-[10px] p-[5px] w-fit bg-[#F1ECFF] text-[#6C40FF] rounded-3xl mb-[5px]"><div className="h-[16px] w-[16px] bg-[#6C40FF] rounded-full"></div><p>Artificial Intelligence</p></a>
          <h2 className="text-[1.3rem] lgtablet:text-[1.6rem] leading-7 mb-[5px]">Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers</h2>
          <p className="text-[#cfcece] hidden lgtablet:block">By <a href="">Joseph Olu</a></p>
        </div>
        </div>
        
        <div className="w-[100%] max-h-[450px] bg-absoluteWhite rounded-[30px] grid grid-cols-1 laptop:col-span-8 overflow-hidden relative text-absoluteWhite">
          <img src={blogImg5} alt="" />
          <div className="w-[100%] grid absolute bottom-0 px-[30px] py-[15px] shadow-lg backdrop-blur-md backdrop-saturate-[180%] bg-[rgba(0,0,0,0.3)] ">
          <a href="" className="flex items-center gap-[10px] p-[5px] w-fit bg-[#F1ECFF] text-[#6C40FF] rounded-3xl mb-[5px]"><div className="h-[16px] w-[16px] bg-[#6C40FF] rounded-full"></div><p>Artificial Intelligence</p></a>
          <h2 className="text-[1.3rem] lgtablet:text-[1.6rem] leading-7 mb-[5px]">Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers</h2>
          <p className="text-[#cfcece] hidden lgtablet:block">By <a href="">Joseph Olu</a></p>
        </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Hero