import { FC } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import ThemePreview from './ThemePreview/ThemePreview'
import Home from './Home/Home'
import BaseLayout from './BaseLayout'
import Software from './Software/Software'

const browserRouter = createBrowserRouter([{
    element: <BaseLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'software',
            element: <Software />
        },
        {
            path: 'theme',
            element: <ThemePreview />
        }
    ]
}])


const Router: FC = () => (<RouterProvider router={browserRouter} />)

export default Router
