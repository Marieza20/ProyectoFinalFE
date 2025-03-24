import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import llamadosUser from '../../services/llamadosUser'
import 'boxicons'

function PerfilUser() {
  const [user, setUser]=useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDataUsers(){
      const datos = await llamadosUser.get()
      const loggedUser = datos.find(user => user.id === localStorage.getItem("usuario"));
      setUser(loggedUser);
    };
    fetchDataUsers();
  },[]);

  function cerrar() {
    localStorage.removeItem("usuario");
    navigate('/')
  }

  if (!user) {
    return <div>Cargando...</div>;
  }
        
  return (
    <div>
      <div>
        <p><strong>Nombre: </strong>{user.nombre}</p>
        <p><strong>Cédula: </strong>{user.cedula}</p>
        <p><strong>Teléfono: </strong>{user.telefono}</p>
        <p><strong>Correo: </strong>{user.correo}</p>
        <p><strong>Filial: </strong>{user.filial}</p>
        <p><strong>¿Posee Carnet de manipulación de Alimentos?: </strong>{user.carnet}</p>
        <p><strong>Contraseña: </strong>{user.password}</p>
      </div>
      <div>
        <input type="button" onClick={cerrar} value="Cerrar Sesión" />
      </div>
    </div>
  )
}

export default PerfilUser