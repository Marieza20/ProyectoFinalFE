import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Header.css'

function HeaderAdmin() {
  return (
    <div>
        <nav id='nav'>
            <ul id='ul1'>
                <li><Link id='Link' to="/habitantesAd">Registro</Link></li>
                <li><Link id='Link' to="/organizacionAd"> Organización</Link></li>
                <li><Link id='Link' to="/agendaAd">Agenda</Link></li>
            </ul>
            <ul id='ul2'>
                <li><Link id='Link' to="/perfil">Mi Cuenta</Link></li>
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