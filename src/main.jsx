import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PDFProvider from './context/PDFProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PDFProvider>
    <App />
    </PDFProvider>
  </React.StrictMode>,
)
