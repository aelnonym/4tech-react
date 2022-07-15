import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header>
        Cabeceilio
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>

          
          <Route index element={<Home />} />
          <Route path="products" element={<div><h1>Products</h1></div>}/>

          </Route>
        </Routes>
      </BrowserRouter>
      <footer>Pé</footer>
    </div>
  );
}

export default App;
