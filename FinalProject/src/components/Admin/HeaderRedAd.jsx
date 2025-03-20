import React from 'react'
import { Link } from 'react-router-dom';

function HeaderRedAd() {
  return (
    <div>
        <nav id='nav2'>
            <ul id='ulH'>
                <li><Link id='Link' to="/redAd">Donaciones</Link></li>
                <li><Link id='Link' to="/padrinosAd">Padrinos</Link></li>
                <li><Link id='Link' to="/colaboracionAd">Colaboradores</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderRedAd