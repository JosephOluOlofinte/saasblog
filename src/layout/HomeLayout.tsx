// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Footer, Header, Sidebar } from "../components"
import { HomeComp } from "../pages/homepage"

const HomeLayout = () => {
  return (
    <Fragment>
      <Header />

      <div className="flex justify-center w-[100%]">
        <div className="w-[90%] grid grid-cols-12 gap-[20px] pt-[70px]">
          <HomeComp />
          <Sidebar />
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default HomeLayout