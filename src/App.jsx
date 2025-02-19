import React from 'react'
import Appbar from './components/layout-ui/Appbar'
import Home from './pages/Home'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import LayoutWrapper from './LayoutWrapper'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      children: <LayoutWrapper />,
      children: [
        {
          index: true, element: <Home />
        }
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