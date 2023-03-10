import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home} from './Home';
import { Page } from './Page';

export const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="py-4 text-center bg-dark 'text-center mb-3  ' " data-bs-theme="dark">
        <Link className="mx-2 btn btn-dark" to='/'>Inicio</Link>
        <Link className="mx-2 btn btn-dark" to='/Page'>Ejercicios</Link>
        <Link to =''></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Page' element={<Page/>} />
      </Routes>
    </BrowserRouter>
  );
};
