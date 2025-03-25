import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons'
import '../../styles/Footer.css'

function Footer() {
  return (
    <div id='div'>
        <nav id='footer'>
            <div id='divF'>
                
                <ul id='ulF'>
                    <li><box-icon type='logo' name='whatsapp'></box-icon></li>
                    <li><box-icon type='logo' name='facebook'></box-icon></li>
                    <li><box-icon type='logo' name='instagram-alt'></box-icon></li>
                </ul>
            </div>
            <div id='divF'>
                <h3 id='h3'>Navegación</h3>
                <ul id='ul'>
                    <li><Link id='Link' to="/">Acerca de</Link></li>
                    <li><Link id='Link' to="/estadistica"> Estadísticas</Link></li>
                    <li><Link id='Link' to="/red">Red de Apoyo</Link></li>
                </ul>
            </div>
            <div id='divF'>
                <h3 id='h3'>Contactos</h3>
                <ul id='ul'>
                    <li>Coordinadora Rostro de Cristo</li>
                    <li>Coordinador Pastoral Social</li>
                    <li>Oficina Parroquial</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Footer