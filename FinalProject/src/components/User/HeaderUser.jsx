import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Header.css'

function HeaderUser() {
  return (
    <div>
        <nav id='nav'>
            <ul id='ul1'>
                <li><Link id='Link' to="/habitantes">Registro</Link></li>
                <li><Link id='Link' to="/organizacion"> Organización</Link></li>
                <li><Link id='Link' to="/agenda">Agenda</Link></li>
            </ul>
            <ul id='ul2'>
                <li><Link id='Link' to="/perfil">Mi Cuenta</Link></li>
            </ul>
        </nav>

        <nav id='nav2'>
            <ul id='ulH'>
                <li><Link id='Link' to="/homeUser">Acerca de</Link></li>
                <li><Link id='Link' to="/estadisticaUser"> Estadísticas</Link></li>
                <li><Link id='Link' to="/redUser">Red de Apoyo</Link></li>
                <li><a id='Link' href="#footer">Contactos</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderUser