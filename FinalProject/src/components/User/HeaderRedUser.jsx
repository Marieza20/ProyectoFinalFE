import React from 'react'
import { Link } from 'react-router-dom';

function HeaderRedUser() {
  return (
    <div id='div'>
        <nav id='nav2'>
            <ul id='ulH'>
                <Link id='Link' to="/redUser">Donaciones</Link>
                <Link id='Link' to="/padrinosUser">Padrinos</Link>
                <Link id='Link' to="/colaboracionUser">Colaboradores</Link>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderRedUser