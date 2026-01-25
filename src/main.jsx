import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import { ViteReactSSG } from 'vite-react-ssg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/colors.scss'
import routes from './App.tsx'

export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  { routes },
  // function to have custom setups
  ({ router, routes, isClient, initialState }) => {
    // do something.
  },
)
