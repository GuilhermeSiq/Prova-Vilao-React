import React from 'react';
import ReactDOM from 'react-dom/client';



import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Tabela from './pages/tabela/tabela.js';
import Vilao from './pages/vilao/vilao.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Tabela />} />
      <Route path='/vilao' element={<Vilao />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);