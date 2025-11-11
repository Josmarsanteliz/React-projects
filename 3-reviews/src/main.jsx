import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Reviews from './Reviews.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reviews />
  </StrictMode>,
)
