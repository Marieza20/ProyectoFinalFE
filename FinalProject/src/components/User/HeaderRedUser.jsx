import React from 'react'
import { Link } from 'react-router-dom';

function HeaderRedUser() {
  return (
    <div id='div'>
        <nav id='nav2'>
            <ul id='ulH'>
                <li><Link id='Link' to="/redUser">Donaciones</Link></li>
                <li><Link id='Link' to="/padrinosUser">Padrinos</Link></li>
                <li><Link id='Link' to="/colaboracionUser">Colaboradores</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderRedUser