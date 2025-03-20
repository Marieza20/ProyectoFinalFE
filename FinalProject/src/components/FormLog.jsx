import React, { useState,useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import llamadosUser from '../services/llamadosUser';

function FormLog() {
  const [nombreUser, setNombreUser]=useState()
  const [passwordUser, setPasswordUser]=useState()
  const [users, setUsers]=useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDataUsers(){
      const datos = await llamadosUser.get()
      setUsers(datos)
    };
    fetchDataUsers();
  },[]);

  function nombre(evento) {
    setNombreUser(evento.target.value)
  }
  function password(evento) {
    setPasswordUser(evento.target.value)
  }

  function acceder() {
    const encontrado = users.find(user => (user.telefono===nombreUser || user.correo===nombreUser) && user.password===passwordUser)

    if (encontrado.length===0) {
      console.log("Usuario o contraseña incorrectos");
    }else{
      if (encontrado.type === "admin") {
        navigate('/homeAd')
      }else{
        navigate('/homeUser')
      }
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="nombre">Teléfono o Correo:</label>
        <input onChange={nombre} value={nombreUser} type="text" id='nombre' />
        <label htmlFor="password">Contraseña:</label>
        <input onChange={password} value={passwordUser} type="password" id='password' />
        <input onClick={acceder} type="button" value="Acceder" />
        <p>¿No tienes cuenta? <Link to="/register">Regístrate Aquí</Link></p>
      </div>
    </div>
  )
}

export default FormLog