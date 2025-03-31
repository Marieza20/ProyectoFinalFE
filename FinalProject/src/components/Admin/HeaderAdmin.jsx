import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.jpg';
import '../../styles/Header.css';

function HeaderAdmin() {
  return (
    <div id='div'>
        <nav id='nav'>
            <ul id='ul1'>
                <div id="Logo">
                    <img src={Logo} alt="" />
                </div>
                <Link id='Link' to="/habitantesAd">Registro</Link>
                <Link id='Link' to="/organizacionAd">Organización</Link>
                <Link id='Link' to="/agendaAd">Agenda</Link>
            </ul>
            <ul id='ul2'>
                <Link id='Link' to="/perfilAd"><li id="btnLogin">Mi Cuenta</li></Link>
            </ul>
        </nav>

        <nav id='nav2'>
            <ul id='ulH'>
                <Link id='Link' to="/homeAd">Acerca de</Link>
                <Link id='Link' to="/estadisticaAd"> Estadísticas</Link>
                <Link id='Link' to="/redAd">Red de Apoyo</Link>
                <a id='Link' href="#footer">Contactos</a>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderAdmin