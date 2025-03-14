import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons'

function Footer() {
  return (
    <div>
        <nav>
            <div>
                
                <ul>
                    <li><box-icon type='logo' name='whatsapp'></box-icon></li>
                    <li><box-icon type='logo' name='facebook'></box-icon></li>
                    <li><box-icon type='logo' name='instagram-alt'></box-icon></li>
                </ul>
            </div>
            <div>
                <h3>Navegación</h3>
                <ul>
                    <li><Link to="/">Acerca de</Link></li>
                    <li><Link to="/estadistica"> Estadísticas</Link></li>
                    <li><Link to="/red">Red de Apoyo</Link></li>
                </ul>
            </div>
            <div>
                <h3>Contactos</h3>
                <ul>
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