import React, { useState } from 'react';
import { DetalleContacto } from '../DetallesContacto/DetalleContacto';
import './Lista.css'


const Lista = (props) => {
    

  return (
    <>
      <h1 className='texto-introduccion-lista'>Lista de contactos registrados</h1>
      
      <div className='cajaLista'>
      
      <ul>
    {props.contactos.map(elemento => (
      
      <li key={elemento.id}>
      <DetalleContacto carta={elemento} borrarTareaFinal={props.borrarTarea} />
        
      </li>
      
      
    ))}
  </ul>
  </div>
    </>
  )
}

export { Lista };