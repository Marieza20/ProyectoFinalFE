import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamadosUser from '../../services/llamadosUser';
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
        <div id='ContainerF'>
          <div id="Form">
            <h3>Iniciar Sesión</h3>
            <input onChange={nombre} value={nombreUser} type="text" placeholder='Teléfono o Correo:' />
            <input onChange={password} value={passwordUser} type="password" placeholder='Contraseña:' />
          </div>
          <input onClick={acceder} type="button" value="Acceder" id='btn' />
          <p id='linkcito'>¿No tienes cuenta? <Link id='Link2' to="/register">Regístrate Aquí</Link></p>
        </div>
      </div>
    </div>
  )
}

export default FormLog