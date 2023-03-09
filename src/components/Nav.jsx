import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home} from './Home';
import { Exercises } from './Exercises';

export const Nav = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/ejercicios'>Ejercicios</Link>
        <Link to =''></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ejercicios' element={<Exercises/>} />
      </Routes>
    </BrowserRouter>
  );
};