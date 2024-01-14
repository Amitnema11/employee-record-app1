import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Context from './utils/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
    <App />
    < ToastContainer/>
    </BrowserRouter>
    </Context>
)
