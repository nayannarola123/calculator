import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import ComA from './components/comA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComA />
  </StrictMode>,
)
