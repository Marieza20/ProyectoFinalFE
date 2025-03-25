import React from 'react'
import { Link } from 'react-router-dom';

function HeaderRed() {
  return (
    <div id='div'>
        <nav id='nav2'>
            <ul id='ulH'>
                <li><Link id='Link' to="/red">Donaciones</Link></li>
                <li><Link id='Link' to="/padrinos">Padrinos</Link></li>
                <li><Link id='Link' to="/colaboracion">Colaboradores</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderRed