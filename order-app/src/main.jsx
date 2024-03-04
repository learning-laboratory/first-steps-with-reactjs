import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { CartContext, CartContextProvider, MealContextProvider } from './store/main-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MealContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </MealContextProvider>
  </React.StrictMode>,
)
