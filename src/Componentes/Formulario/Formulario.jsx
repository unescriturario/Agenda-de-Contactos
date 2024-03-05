import React, { useState } from 'react';
import './Formulario.css';



const Formulario = (props) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [calle, setCalle] = useState('');
  
 

  const addContacto = (event) => {
    event.preventDefault();
    const nuevoContacto = {
      id: Date.now(),
      nombre,
      telefono,
      correo,
      carrera,
      calle
    };
 
    props.setContactos([...props.contactos, nuevoContacto]);
    setNombre('');
    setTelefono('');
    setCorreo('');
    setCarrera('');
    setCalle('');
  }

  return (
    <>
    <section className='caja-grande-elemento'>
    <div className='caja-titulo'>
      <h1 className='titular-formulario'>Formulario para añadir contactos</h1>
      </div>
      <div className='contacto-formulario'>
        <div className='caja-formulario-exterior'>
        <form className='contacto-formularioform' onSubmit={addContacto}>
          <div className='caja-interior-formulario'>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <label>Teléfono:</label>
          <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          <label>Correo:</label>
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
          <label>Carrera:</label>
          <input type="number" value={carrera} onChange={(e) => setCarrera(e.target.value)} required />
          <label>Calle:</label>
          <input type="number" value={calle} onChange={(e) => setCalle(e.target.value)} required />
          <button className='boton-formulario' type="submit" onClick={addContacto}>Agregar Contacto</button>
          </div>
        </form>
        </div>
      </div>
      
      </section>
    </>
  );
}

export { Formulario };