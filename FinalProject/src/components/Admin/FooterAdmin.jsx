import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons';
import Logo from '../../img/logo.jpg';
import '../../styles/Footer.css';

function FooterAdmin() {
  return (
    <div id='div'>
        <nav id='footer'>
            <div id='divF'>
                <div id="Logo">
                    <img src={Logo} alt="" />
                </div>
                <ul id='ulF'>
                    <li><box-icon type='logo' name='whatsapp' color='#fff'></box-icon></li>
                    <li><box-icon type='logo' name='facebook' color='#fff'></box-icon></li>
                    <li><box-icon type='logo' name='instagram-alt' color='#fff'></box-icon></li>
                </ul>
            </div>
            <div id='divF'>
                <h3 id='h3'>Navegación</h3>
                <ul id='ul'>
                    <li><Link id='Link' to="/homeAd">Acerca de</Link></li>
                    <li><Link id='Link' to="/estadisticaAd"> Estadísticas</Link></li>
                    <li><Link id='Link' to="/redAd">Red de Apoyo</Link></li>
                </ul>
            </div>
            <div id='divF'>
                <h3 id='h3'>Navegación</h3>
                <ul id='ul'>
                    <li><Link id='Link' to="/habitantesAd">Registro</Link></li>
                    <li><Link id='Link' to="/organizacionAd">Organización</Link></li>
                    <li><Link id='Link' to="/agendaAd">Agenda</Link></li>
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

export default FooterAdmin