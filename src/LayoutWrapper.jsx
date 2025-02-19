import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from './components/layout-ui/Appbar'

const LayoutWrapper = () => {
    return (
        <body>
            <Appbar />
            <Outlet />
        </body>
    )
}

export default LayoutWrapper