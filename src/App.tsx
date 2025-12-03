import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Pages/Layout/Layout'
import Login from './Pages/Login/Login'
import Products from './Pages/Products/Products'
import Register from './Pages/Register/Register'
const queryClient = new QueryClient()

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{
        index: true,
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/products',
        element: <Products />
      }
      ]
    },
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <RouterProvider router={routes} />
      </QueryClientProvider>
    </>
  )
}

export default App
