import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
                <li><Link id='Link' to="/habitantesAd">Registro</Link></li>
                <li><Link id='Link' to="/organizacionAd">Organización</Link></li>
                <li><Link id='Link' to="/agendaAd">Agenda</Link></li>
            </ul>
            <ul id='ul2'>
                <li><Link id='Link' to="/perfilAd">Mi Cuenta</Link></li>
            </ul>
        </nav>

        <nav id='nav2'>
            <ul id='ulH'>
                <li><Link id='Link' to="/homeAd">Acerca de</Link></li>
                <li><Link id='Link' to="/estadisticaAd"> Estadísticas</Link></li>
                <li><Link id='Link' to="/redAd">Red de Apoyo</Link></li>
                <li><a id='Link' href="#footer">Contactos</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderAdmin