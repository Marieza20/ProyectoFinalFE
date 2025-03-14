import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Acerca de</Link></li>
          <li><Link to="/estadistica"> Estadísticas</Link></li>
          <li><Link to="/red">Red de Apoyo</Link></li>
          <li>Contactos</li>
        </ul>
        <ul>
          <li><Link to="/login">Inicio</Link></li>
          <li><Link to="/register">Registro</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header