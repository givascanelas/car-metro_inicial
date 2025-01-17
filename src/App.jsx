import React from 'react';
import Login from './assets/pages/Login'
import Cadastro from './assets/pages/Cadastro'
import Home from './assets/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div> 
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} /> 
            {/* (localStorage.getItem('token')) */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
