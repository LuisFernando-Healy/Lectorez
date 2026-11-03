import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Landing from './features/landing/Landing.jsx'
import Editor from './features/editor/editor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Landing/>
    <Editor/>
  </StrictMode>,


)
