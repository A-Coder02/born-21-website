import React from 'react'
import Appbar from './components/layout-ui/Appbar'
import Home from './pages/Home'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import LayoutWrapper from './LayoutWrapper'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutWrapper />,
      children: [
        {
          index: true, element: <Home />
        },
        {
          path: 'services/:title', element: <Services />
        },
        {
          path: '*', element: <NotFound />
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App