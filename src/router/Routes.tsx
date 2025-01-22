

import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../layout";


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [{
            index: true,
        }]
    }
])