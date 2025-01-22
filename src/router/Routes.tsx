

import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../layout";
import { HomeComp } from "../pages/homepage";



export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [{
            index: true,
            element: <HomeComp />
        }]
    }
])