import { FC } from "react"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import ThemePreview from "./ThemePreview/ThemePreview"
import Home from "./Home/Home"
import BaseLayout from "./BaseLayout"

const router = createBrowserRouter([{
    element: <BaseLayout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "theme",
            element: <ThemePreview />
        }
    ]
}])


const Router: FC = () => (<RouterProvider router={router} />)

export default Router
