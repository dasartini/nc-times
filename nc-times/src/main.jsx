import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from  'react-router-dom'
import { LogInProvider } from './context/LogIn.jsx'
import { IsLogInProvider } from './context/LoginStatus.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<LogInProvider>
<IsLogInProvider>
<BrowserRouter>
    <App />
  </BrowserRouter>
  </IsLogInProvider>
  </LogInProvider>

)
