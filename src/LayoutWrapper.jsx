import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from './components/layout-ui/Appbar'
import ScrollToTop from './ScrollToTop'

const LayoutWrapper = () => {
    return (
        <>
            <ScrollToTop />
            <Appbar />
            <Outlet />
        </>
    )
}

export default LayoutWrapper