import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="fastfeet-theme" defaultTheme="light">
        <Helmet titleTemplate="%s | Fastfeet" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
