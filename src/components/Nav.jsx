import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home} from './Home';
import { Page } from './Page';

export const Nav = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/Page'>Ejercicios</Link>
        <Link to =''></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Page' element={<Page/>} />
      </Routes>
    </BrowserRouter>
  );
};