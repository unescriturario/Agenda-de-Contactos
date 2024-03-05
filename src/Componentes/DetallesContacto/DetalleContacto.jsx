import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './DetalleContacto.css'



const DetalleContacto = (props) => {
    const borrandoTarea = () => {
        props.borrarTareaFinal(props.carta.id);
      }
    return(
        <>
        <div className='caja-contenedora-contacto-general'>
       <div className='caja-contenedora-contacto'>
        
        <p className='letra-tarjeta'>Nombre: {props.carta.nombre}</p>
        <p className='letra-tarjeta'>Teléfono: {props.carta.telefono}</p>
        <p className='letra-tarjeta'>Correo: {props.carta.correo}</p>
        <p className='letra-tarjeta'>Carrera: {props.carta.carrera}</p>
        <p className='letra-tarjeta'> Calle: {props.carta.calle}</p>
        </div>

        <FontAwesomeIcon className='fa-trash' icon={faTrash} onClick={borrandoTarea} />
        </div>
        </>
    )
}

export { DetalleContacto }