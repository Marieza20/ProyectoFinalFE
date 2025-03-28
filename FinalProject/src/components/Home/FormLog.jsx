import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamadosUser from '../../services/llamadosUser';
import '../../styles/Forms.css'
import Swal from 'sweetalert2';
import 'boxicons'

function FormLog() {
  const [nombreUser, setNombreUser]=useState()
  const [passwordUser, setPasswordUser]=useState()
  const [users, setUsers]=useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDataUsers(){
      const datos = await llamadosUser.getUser()
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

    if (!encontrado) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrecto",
        showConfirmButton: false,
        timer: 2000
      });
      setNombreUser("");
      setPasswordUser("");
    }else{
      let list = [encontrado.id, encontrado.type]
      localStorage.setItem("usuario",JSON.stringify(list));
      if (encontrado.type === "admin") {
        navigate('/homeAd')
      }else{
        navigate('/homeUser')
      }
    }
  }

  return (
    <div id='div'>
      <div id='main'>
        <div id='FormLog'>
          <h3>Iniciar Sesión</h3>
          <div id='block'>
            <label htmlFor="nombre">Teléfono o Correo:</label>
            <input onChange={nombre} value={nombreUser} type="text" id='nombre' />
          </div>
          <div id='block'>
            <label htmlFor="password">Contraseña:</label>
            <div className="btnInput">
              <input onChange={password} value={passwordUser} type="password" id='password' />
              <box-icon name='low-vision' className="input-icon"></box-icon>
            </div>
          </div>
          <input onClick={acceder} type="button" value="Acceder" id='btn' />
          <p>¿No tienes cuenta? <Link to="/register">Regístrate Aquí</Link></p>
        </div>
      </div>
    </div>
  )
}

export default FormLog