// import React from 'react'

const Sidebar = () => {
  return (
    <div className="grid grid-cols-1 lgtablet:col-span-3">
      <div className="bg-brandBlue grid gap-[20px] w-[100%] p-[20px] rounded-[10px]">
        <div>
          <img src="" alt="" />
        </div>
        <div className="grid gap-3">
          <h2 className="text-absoluteWhite">Joseph Olu</h2>
          <p className="text-absoluteWhite text-[17px] pb-[10px] border-b-[1px] border-b-brandGrey">Founder of SAAS First - the Best AI and Data-Driven Customer Engagement Tool</p>
        </div>
        <p className="text-absoluteWhite text-[14px]">With 11 years in SaaS, I've built MillionVerifier and SAAS First. Passionate about SaaS, data, and AI. Let's connect if you share the same drive for success!</p>
      </div>
    </div>
  )
}

export default Sidebar