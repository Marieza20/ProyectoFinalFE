import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../img/logo.jpg';
import '../../styles/Header.css';

function HeaderUser() {
  return (
    <div id='div'>
        <nav id='nav'>
            <ul id='ul1'>
                <div id="Logo">
                    <img src={Logo} alt="" />
                </div>
                <li><Link id='Link' to="/habitantes">Registro</Link></li>
                <li><Link id='Link' to="/organizacion"> Organización</Link></li>
                <li><Link id='Link' to="/agenda">Agenda</Link></li>
            </ul>
            <ul id='ul2'>
                <li><Link id='Link' to="/perfilUser">Mi Cuenta</Link></li>
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