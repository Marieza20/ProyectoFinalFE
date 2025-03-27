import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import llamadosUser from '../../services/llamadosUser'

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

  function cargar() {
    llamadosUser.post(nombreUser,cedulaUser,telefonoUser,correoUser,filialUser,carnetUser,passwordUser,"user")
    navigate('/login')
  }
  return (
    <div id='div'>
      <div id='main'>
        <div id='FormLog'>
          <h3>Registro de Usuarios</h3>
          <div id='block'>
            <label htmlFor="nombre">Nombre Completo:</label>
            <input onChange={nombre} value={nombreUser} type="text" id='nombre' />
          </div>
          <div id="block">
            <label htmlFor="cedula">Número de Cédula:</label>
            <input onChange={cedula} value={cedulaUser} type="number" id='cedula' />
          </div>
          <div id="block">
            <label htmlFor="telefono">Número de Teléfono:</label>
            <input onChange={telefono} value={telefonoUser} type="number" id='telefono' />
          </div>
          <div id="block">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input onChange={correo} value={correoUser} type="text" id='correo' />
          </div>
          <div id="block">
            <label htmlFor="filial">Filial:</label>
            <select onChange={filial} value={filialUser} id="filial">
              <option value="" selected>Elige una opción</option>
              <option value="Porvenir">Porvenir</option>
              <option value="20 de Noviembre">20 de Noviembre</option>
              <option value="Chacarita">Chacarita</option>
              <option value="Carrizal">Carrizal</option>
              <option value="El Huerto">El Huerto</option>
              <option value="San Luis">San Luis</option>
              <option value="Santa Eduviges">Santa Eduviges</option>
              <option value="Fray Casiano">Fray Casiano</option>
            </select>
          </div>
          <div id="block">
            <label htmlFor="carnet">Carnet de Manipulación de Alimentos:</label>
            <select onChange={carnet} value={carnetUser} id="carnet">
              <option value="" selected>Elige una opción</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
          <div id="block">
            <label htmlFor="password">Contraseña:</label>
            <input onChange={password} value={passwordUser} type="password" id='password' />
          </div>
          <input onClick={cargar} type="button" value="Registrarse" id='btn' />
          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Aquí</Link></p>
        </div>
      </div>
    </div>
  )
}

export default FormRegister