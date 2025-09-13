import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* Per si estas tafanejant aquest es l'arxiu d'arranque per això dins ubiquem l'arxiu App on estan definits els espais header i tal */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
