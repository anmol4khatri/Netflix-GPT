import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestComponent from './TestComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestComponent />
  </StrictMode>,
)
