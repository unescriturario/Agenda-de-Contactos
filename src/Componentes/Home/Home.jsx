import React from 'react';
import imagenHome from '../../assets/ImagenHome.jpg'
import './Home.css'

const Home = () => {
    return(
        <>
    <div className='cajaHome'><h1 className='textoHome'> Aqui puedes registrar y encontrar tu lista de contactos según tus preferencias</h1></div>
    <img className='imagenHome' src={imagenHome} alt=""/>
        </>
    )
}

export { Home }