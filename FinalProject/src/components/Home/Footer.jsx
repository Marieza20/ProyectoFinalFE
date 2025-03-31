import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons'
import Logo from '../../img/logo.jpg';
import '../../styles/Footer.css'

function Footer() {
  return (
    <div id='div'>
        <nav id='footer'>
            <div id='divF'>
                <div id="Logo">
                    <img src={Logo} alt="" />
                </div>
                <ul id='ulF'>
                    <a href="https://www.facebook.com/laSantaCruzChacarita/"><box-icon type='logo' name='whatsapp' color='#fff'></box-icon></a>
                    <a href="https://www.facebook.com/laSantaCruzChacarita/"><box-icon type='logo' name='facebook' color='#fff'></box-icon></a>
                    <a href="lasantacruzdechacarita@gmail.com"><box-icon name='envelope' color='#fff'></box-icon></a>
                </ul>
            </div>
            <div id='divF'>
                <h3 id='h3'>Navegación</h3>
                <ul id='ul'>
                    <Link id='Link' to="/">Acerca de</Link>
                    <Link id='Link' to="/estadistica"> Estadísticas</Link>
                    <Link id='Link' to="/red">Red de Apoyo</Link>
                </ul>
            </div>
            <div id='divF'>
                <h3 id='h3'>Contactos</h3>
                <ul id='ul'>
                    <a id='Link' href="">Coordinadora Rostro de Cristo</a>
                    <a id='Link' href="">Coordinador Pastoral Social</a>
                    <a id='Link' href="">Oficina Parroquial</a>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Footer