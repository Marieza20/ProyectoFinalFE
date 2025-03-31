import React, { useState } from 'react'
import llamadosEquipo from '../../services/llamadosEquipo'
import Swal from 'sweetalert2';

function AdminEquipos() {
  const [nombreEquipo, SetNombreEquipo]=useState()
  const [encargadoEquipo, SetEncargadoEquipo]=useState()
  const [descripcionEquipo, SetDescripcionEquipo]=useState()

  function nombre(evento) {
    SetNombreEquipo(evento.target.value)
  }

  function encargado(evento) {
    SetEncargadoEquipo(evento.target.value)
  }

  function descripcion(evento) {
    SetDescripcionEquipo(evento.target.value)
  }

  function validarFormulario() {
    if (!nombreEquipo || !encargadoEquipo || !descripcionEquipo) {
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
      llamadosEquipo.post(nombreEquipo,encargadoEquipo,descripcionEquipo)
      window.location.reload();
    }
  }

  return (
    <div id='div'>
      <div id="ContainerF">
        <div id='Form'>
          <h3>Añadir Equipos de Trabajo</h3>
            <input onChange={nombre} value={nombreEquipo} type="text" placeholder='Nombre del Equipo' />
            <input onChange={encargado} value={encargadoEquipo} type="text" placeholder='Encargado del Equipo' />
            <textarea onChange={descripcion} value={descripcionEquipo} placeholder='Descripcion del Equipo'></textarea>
        </div>
        <input onClick={cargar} type="button" value="Agregar" id='btn' />
      </div>
    </div>
  )
}

export default AdminEquipos