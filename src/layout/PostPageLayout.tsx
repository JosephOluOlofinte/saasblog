// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Footer, Header, Sidebar } from "../components"
import { PostPage } from "../pages/postpage"

const PostPageLayout = () => {
  return (
    <Fragment>
      <Header />

      <div className="flex justify-center w-[100%]">
        <div className="w-[90%]  grid grid-cols-1 laptop:grid-cols-12 gap-[40px] justify-between pt-[50px]">
          <PostPage />
          <Sidebar />
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default PostPageLayout