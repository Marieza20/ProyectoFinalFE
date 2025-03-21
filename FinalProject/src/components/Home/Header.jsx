import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Header.css'

function Header() {
  return (
    <div>
      <nav id='nav'>
        <ul id='ul1'>
          <li><Link id='Link' to="/">Acerca de</Link></li>
          <li><Link id='Link' to="/estadistica"> Estadísticas</Link></li>
          <li><Link id='Link' to="/red">Red de Apoyo</Link></li>
          <li><a id='Link' href="#footer">Contactos</a></li>
        </ul>
        <ul id='ul2'>
          <li><Link id='Link' to="/login">Inicio</Link></li>
          <li><Link id='Link' to="/register">Registro</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header