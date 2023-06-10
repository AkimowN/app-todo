import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './InfoTs/Info.ts'
import './InfoTs/interfaces.ts'
import './InfoTs/enum.ts'
import './InfoTs/function.ts'
import './InfoTs/classes.ts'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
