import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './components/home'
import {Nav} from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/home">
        Inicio
      </Link>

    </nav>
    <Routes>
      <Route path='/.'>
      </Route>
    </Routes>
    </BrowserRouter>

)}

export default App
