import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import Home from './components/pages/Home.jsx';
import Empresa from './components/pages/empresa.jsx';
import Contato from './components/pages/contato.jsx';
import Catalogo from './components/pages/Catalogo.jsx';

function App() {

  
  return (
    <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/empresa' element={<Empresa/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
          </Routes>
        <Footer/> 
    </div>
  )
}

export default App;
