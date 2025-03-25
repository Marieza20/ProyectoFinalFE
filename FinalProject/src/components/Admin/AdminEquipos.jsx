import React, { useState } from 'react'
import llamadosEquipo from '../../services/llamadosEquipo'

function AdminEquipos() {
  const [nombreEquipo, SetNombreEquipo]=useState()
  const [encargadoEquipo, SetEncargadoEquipo]=useState()
  const [descripcionEquipo, SetDescripcionEquipo]=useState()
  const [enlaceEquipo, SetEnlaceEquipo]=useState()

  function nombre(evento) {
    SetNombreEquipo(evento.target.value)
  }

  function encargado(evento) {
    SetEncargadoEquipo(evento.target.value)
  }

  function descripcion(evento) {
    SetDescripcionEquipo(evento.target.value)
  }

  function enlace(evento) {
    SetEnlaceEquipo(evento.target.value)
  }

  async function cargar() {
    llamadosEquipo.post(nombreEquipo,encargadoEquipo,descripcionEquipo,enlaceEquipo)
  }

  return (
    <div id='div'>
      <div id="ContainerF">
        <div id='FormEquipo'>
          <input onChange={nombre} value={nombreEquipo} type="text" placeholder='Nombre del Equipo' />
          <input onChange={encargado} value={encargadoEquipo} type="text" placeholder='Encargado del Equipo' />
          <textarea onChange={descripcion} value={descripcionEquipo} placeholder='Descripción'></textarea>
          <input onChange={enlace} value={enlaceEquipo} type='text' placeholder='Enlace al grupo de WhatsApp' />
          <box-icon onClick={cargar} name='check'></box-icon>
        </div>
      </div>
    </div>
  )
}

export default AdminEquipos