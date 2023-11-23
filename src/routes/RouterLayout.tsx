import { FC } from "react"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import ThemePreview from "./ThemePreview/ThemePreview"
import Home from "./Home/Home"


const router = createBrowserRouter([{
    path: "/",
    element: <Home />
},
{
    path: "/theme",
    element: <ThemePreview />
}])

const RouterLayout: FC = () => {
    return <RouterProvider router={router} />
}

export default RouterLayout

