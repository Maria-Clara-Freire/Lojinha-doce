import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Detalhe1 from './pages/Detalhe1'
import Detalhe2 from './pages/Destalhe2';
import Detalhe3 from './pages/Detalhe3';
import Contato from './pages/Contato';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detalhe1" element={<Detalhe1/>} />
        <Route path="/detalhe2" element={<Detalhe2/>} />
        <Route path="/detalhe3" element={<Detalhe3/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App