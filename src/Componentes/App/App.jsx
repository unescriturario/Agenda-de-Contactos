import React,{useState} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home ,Lista, Formulario, Filtro } from '../../index.js'
import './App.css'

function App() {
  const [contactos, setContactos] = useState([]);
  const [search,setSearch] = useState('')

  const borrarTarea = (elementoid) => {
    const borrarLista = contactos.filter(elemento => elemento.id !== elementoid);
    setContactos(borrarLista);
  };
  const searchContacto = () => {
    return contactos.filter (contacto => contacto.nombre.toLowerCase().startsWith(search.toLowerCase())) }
 
  return (
    <>
     
      <BrowserRouter>
        <header className='navegador-main'>
        
          <nav className='menuNavegacion'>
            <div className='cajaTitular'><h1 className='titular'>Bienvenido a tu lista de contactos</h1></div>
            <li className='menuAplicación'>
             <ul className='botonMenu'><NavLink to='/'>Home</NavLink></ul>
             <ul className='botonMenu'><NavLink to='/lista'>Lista de contactos</NavLink></ul>
             <ul className='botonMenu'><NavLink to='/formulario'>Añadir contactos</NavLink></ul>
             <ul className='botonMenu'><NavLink to='/filtro'>Filtrar contactos</NavLink></ul>
            </li>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lista' element={<Lista contactos={contactos} borrarTarea={borrarTarea}/>} />
          <Route path='/formulario' element={<Formulario contactos={contactos} setContactos={setContactos} />} />
          <Route path='/filtro' element={<Filtro search={search} setSearch={setSearch} searchContacto={searchContacto}  />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
