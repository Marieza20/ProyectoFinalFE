import React from 'react'
import { Link } from 'react-router-dom';
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
                <Link id='Link' to="/habitantes">Registro</Link>
                <Link id='Link' to="/organizacion"> Organización</Link>
                <Link id='Link' to="/agenda">Agenda</Link>
            </ul>
            <ul id='ul2'>
                <Link id='Link' to="/perfilUser"><li id="btnLogin">Mi Cuenta</li></Link>
            </ul>
        </nav>

        <nav id='nav2'>
            <ul id='ulH'>
                <Link id='Link' to="/homeUser">Acerca de</Link>
                <Link id='Link' to="/estadisticaUser"> Estadísticas</Link>
                <Link id='Link' to="/redUser">Red de Apoyo</Link>
                <a id='Link' href="#footer">Contactos</a>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderUser