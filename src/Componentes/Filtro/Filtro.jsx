import React from 'react';

import './Filtro.css'
import { DetalleBusqueda } from '../DetallesContacto/DetalleBusqueda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Filtro = (props) => {
  return (
    <>
      <h1 className='titulo-filtro'>Filtrar contactos</h1>

      <div className="search-container">
        <input className='caja-buscador' type="text" placeholder='Ingrese nombre' value={props.search} onChange={(e) => props.setSearch(e.target.value)} />
        <FontAwesomeIcon className='fa-search' icon={faSearch} onClick={props.searchContacto} />

      </div>
      <div className='cajaLista'>
        <ul>
          {props.search && props.searchContacto().map((contacto) =>
            <li key={contacto.id}>
              <DetalleBusqueda elemento={contacto} />

            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export { Filtro }