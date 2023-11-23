import { FC } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {
    Outlet,
} from 'react-router-dom'

const RootLayout: FC = () => {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

export default RootLayout
