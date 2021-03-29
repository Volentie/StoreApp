import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contato from './Contato';
import Home from './Home';
import MHead from './MHead';
import { ProductsStorage } from './ProductsContext';
import Produtos from './Produtos';

const App = () => {
  return (
    <ProductsStorage>
      <BrowserRouter>
        <MHead />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto/:id" element={<Produtos />} />
          <Route path="contato/" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </ProductsStorage>
  );
};
export default App;
