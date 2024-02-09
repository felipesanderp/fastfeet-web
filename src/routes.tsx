import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { UsersAdmin } from './pages/app/users/admin/admin'
import { UsersDeliverymen } from './pages/app/users/deliverymen/deliverymen'
import { UsersRecipients } from './pages/app/users/recipients/recipients'
import { SignIn } from './pages/auth/sign-in'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/users/admins',
        element: <UsersAdmin />,
      },
      {
        path: '/users/deliverymen',
        element: <UsersDeliverymen />,
      },
      {
        path: '/users/recipients',
        element: <UsersRecipients />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
