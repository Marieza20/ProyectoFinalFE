import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function HeaderUser() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/habitantes">Registro</Link></li>
                <li><Link to="/organizacion"> Organización</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
            </ul>
            <ul>
                <li><Link to="/perfil">Mi Cuenta</Link></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><Link to="/homeUser">Acerca de</Link></li>
                <li><Link to="/estadisticaUser"> Estadísticas</Link></li>
                <li><Link to="/redUser">Red de Apoyo</Link></li>
                <li>Contactos</li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderUser