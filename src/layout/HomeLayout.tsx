// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Footer, Header } from "../components"
import { HomeComp } from "../pages/homepage"

const HomeLayout = () => {
  return (
    <Fragment>
      <Header />
      <HomeComp />
      <Footer />
    </Fragment>
  )
}

export default HomeLayout