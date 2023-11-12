import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
