import React from 'react';
import './DetalleBusqueda.css'


const DetalleBusqueda = (props) => {

    
    return(
        <>
        <div className='caja-contenedora-contacto'>
        <p className='letra-tarjeta'>Nombre: {props.elemento.nombre}</p>
        <p className='letra-tarjeta'>Teléfono: {props.elemento.telefono}</p>
        <p className='letra-tarjeta'>Correo: {props.elemento.correo}</p>
        <p className='letra-tarjeta'>Carrera: {props.elemento.carrera}</p>
        <p className='letra-tarjeta'>Calle: {props.elemento.calle}</p>
        </div>

        </>
    )
}

export { DetalleBusqueda }