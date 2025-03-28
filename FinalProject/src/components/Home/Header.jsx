import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.jpg';
import '../../styles/Header.css'

function Header() {
  return (
    <div id='div'>
      <nav id='nav'>
        <ul id='ul1'>
          <div id="Logo">
            <img src={Logo} alt="" />
          </div>
          <Link id='Link' to="/">Acerca de</Link>
          <Link id='Link' to="/estadistica"> Estadísticas</Link>
          <Link id='Link' to="/red">Red de Apoyo</Link>
          <a id='Link' href="#footer">Contactos</a>
        </ul>
        <ul id='ul2'>
          <Link id='Link' to="/register">Registro</Link>
          <Link id='Link' to="/login"><li id="btnLogin">Inicio</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header