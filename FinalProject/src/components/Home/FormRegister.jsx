import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import llamadosUser from '../../services/llamadosUser'
import Swal from 'sweetalert2';

function FormRegister() {
  const [nombreUser, setNombreUser]=useState()
  const [cedulaUser, setCedulaUser]=useState()
  const [telefonoUser, setTelefonoUser]=useState()
  const [correoUser, setCorreoUser]=useState()
  const [filialUser, setFilialUser]=useState()
  const [carnetUser, setCarnetUser]=useState()
  const [passwordUser, setPasswordUser]=useState()
  
  function nombre(evento) {
    setNombreUser(evento.target.value)
  }

  function cedula(evento) {
    setCedulaUser(evento.target.value)
  }

  function telefono(evento) {
    setTelefonoUser(evento.target.value)
  }
  
  function correo(evento) {
    setCorreoUser(evento.target.value)
  }

  function filial(evento) {
    setFilialUser(evento.target.value)
  }

  function carnet(evento) {
    setCarnetUser(evento.target.value)
  }

  function password(evento) {
    setPasswordUser(evento.target.value)
  }

  function validarFormulario() {
    if (!nombreUser || !cedulaUser || !telefonoUser || !correoUser || !filialUser || !carnetUser || !passwordUser) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos antes de registrarte.',
      });
      return false;
    }
    return true;
  }

  function cargar() {
    if (validarFormulario()) {
      llamadosUser.post(nombreUser, cedulaUser, telefonoUser, correoUser, filialUser, carnetUser, passwordUser, "user");
      navigate('/login');
    }
  }
  return (
    <div id='div'>
      <div id='main'>
        <div id="ContainerF">
          <div id='Form'>
            <h3>Registro de Usuarios</h3>
            <input onChange={nombre} value={nombreUser} type="text" placeholder='Nombre Completo' />
            <input onChange={cedula} value={cedulaUser} type="number" placeholder='Número de Cédula' />
            <input onChange={telefono} value={telefonoUser} type="number" placeholder='Número de Télefono' />
            <input onChange={correo} value={correoUser} type="text" placeholder='Correo Electrónico' />
            <select onChange={filial} value={filialUser}>
              <option value="" selected>Filial</option>
              <option value="Porvenir">Porvenir</option>
              <option value="20 de Noviembre">20 de Noviembre</option>
              <option value="Chacarita">Chacarita</option>
              <option value="Carrizal">Carrizal</option>
              <option value="El Huerto">El Huerto</option>
              <option value="San Luis">San Luis</option>
              <option value="Santa Eduviges">Santa Eduviges</option>
              <option value="Fray Casiano">Fray Casiano</option>
            </select>
            <select onChange={carnet} value={carnetUser}>
              <option value="" selected>¿Tiene Carnet de Manipulación de Alimentos?</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
            <input onChange={password} value={passwordUser} type="password" placeholder='Contraseña:' />
          </div>
          <input onClick={cargar} type="button" value="Registrarse" id='btn' />
          <p id='linkcito'>¿Ya tienes una cuenta? <Link id='Link2' to="/login">Inicia Aquí</Link></p>
        </div>
      </div>
    </div>
  )
}

export default FormRegister