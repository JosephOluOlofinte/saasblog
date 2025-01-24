

import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../layout";
import PostPageLayout from "../layout/PostPageLayout";


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [{
            index: true,
        }]
    },

    {
        path: "/post-page",
        element: <PostPageLayout />,
    }
])