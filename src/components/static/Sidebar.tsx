// import React from 'react'

import displayPic from '../../assets/images/Meeee.jpg'
import blueLinkedIn from '../../assets/images/linkedin-blue.png'
import whiteFacebook from '../../assets/images/facebook-white.png'
import whiteLinkedIn from '../../assets/images/linkedin-white.png'
import whiteX from '../../assets/images/twitter-white.png'

const Sidebar = () => {
  return (
    <div className="grid grid-cols-1 gap-[30px] max-w-[360px] laptop:col-span-4">
      <div className="bg-brandBlue grid gap-[20px] w-[100%] p-[20px] rounded-[10px]">
        <div className='flex items-baseline gap-[25px]'>
          <div className='h-[110px] w-[110px] rounded-lg overflow-hidden border-[1px] border-[rgba(255,255,255,0.5)]'>
            <img src={displayPic} alt="" />
          </div>
          <div className='h-[35px] w-[35px]'>
            <img src={blueLinkedIn} alt="" />
          </div>
        </div>
        <div className="grid gap-3">
          <h2 className="text-absoluteWhite">Joseph Olu</h2>
          <p className="text-absoluteWhite text-[17px] pb-[10px] border-b-[1px] border-b-brandGrey text-justify">Founder of SAAS Blog — the Best AI and Data-Driven Customer Engagement Tool</p>
        </div>
        <p className="text-absoluteWhite text-[14px] text-justify">With 11 years in SaaS, I've built MillionVerifier and SAAS First. Passionate about SaaS, data, and AI. Let's connect if you share the same drive for success!</p>
      </div>

      <div className='bg-brandDarkBlue px-[30px] py-[25px] grid gap-[15px] rounded-[10px]'>
        <p className='text-absoluteWhite font-semibold'>Share with your community!</p>
        <div className='flex items-center gap-[15px]'>
          <div className='w-[35px] h-[35px]'><a href=""><img src={whiteFacebook} alt="" /></a></div>
          <div className='w-[35px] h-[35px]'><a href=""><img src={whiteX} alt="" /></a></div>
          <div className='w-[35px] h-[35px]'><a href=""><img src={whiteLinkedIn} alt="" /></a></div>
        </div>
      </div>

      <div className='bg-absoluteWhite p-[20px] rounded-[10px]'>
        <p className='text-[18px] font-bold border-b-[1px] border-b-brandGrey pb-[5px]'>In this article</p>
        <ul className='p-[20px] font-medium grid gap-[15px]'>
          <li><a href="">Exploring Generative AI in Content Creation</a></li>
          <li><a href="">Exploring Generative AI in Content Creation</a></li>
          <li><a href="">Exploring Generative AI in Content Creation</a></li>
          <li><a href="">Exploring Generative AI in Content Creation</a></li>
          <li><a href="">Exploring Generative AI in Content Creation</a></li>
          <li><a href="">Exploring Generative AI in Content Creation</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar