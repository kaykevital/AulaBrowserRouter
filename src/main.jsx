import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/index'
import Ofertas from './Ofertas/index'
import Produtos from './Produtos/index'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes element={<App/>} path='/'>
          <Route element={<Home/>} path='/home'/>
          <Route element={<Ofertas/>} path='/ofertas'/>
          <Route element={<Produtos/>} path='/produtos'/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



