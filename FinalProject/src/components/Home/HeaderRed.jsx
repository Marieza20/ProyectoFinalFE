import React from 'react'
import { Link } from 'react-router-dom';

function HeaderRed() {
  return (
    <div id='div'>
        <nav id='nav2'>
            <ul id='ulH'>
                <Link id='Link' to="/red">Donaciones</Link>
                <Link id='Link' to="/padrinos">Padrinos</Link>
                <Link id='Link' to="/colaboracion">Colaboradores</Link>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderRed