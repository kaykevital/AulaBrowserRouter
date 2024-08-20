import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
        <Route element={<App/>} path='/'/>
          <Route element={<PrimeiraAtividade/>} path='/Home'/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



