import { FC } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import ThemePreview from './ThemePreview/ThemePreview'
import Home from './Home/Home'
import BaseLayout from './BaseLayout'
import Software from './Software/Software'
import NotFound from './NotFound/NotFound'
import FineArt from './FineArt/FineArt'

const browserRouter = createBrowserRouter([{
    element: <BaseLayout />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'software',
            element: <Software />
        },
        {
            path: 'theme',
            element: <ThemePreview />
        },
        {
            path: 'art',
            element: <FineArt />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
}])


const Router: FC = () => (<RouterProvider router={browserRouter} />)

export default Router
