import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import Playground from './pages/Playground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
)
