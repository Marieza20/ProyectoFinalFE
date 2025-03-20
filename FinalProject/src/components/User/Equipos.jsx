import React, {useState,useEffect} from 'react'

import llamadosEquipo from '../../services/llamadosEquipo'
import 'boxicons'

function Equipos() {
  const [equipos, setEquipos]=useState([])
      
  useEffect(() => {
  async function fetchDataEquipos(){
      const datos = await llamadosEquipo.get()
      setEquipos(datos)
  };
  fetchDataEquipos();
  },[]);
      
  return (
    <div>
      <div>
          {equipos.map((equipo,index) =>(
          <li key={index}>
              <p><strong>{equipo.nombre}</strong></p>
              <p><strong>Encargado: </strong>{equipo.encargado}</p>
              <p>{equipo.descripcion}</p>
              <input type="button" value="Unirme al grupo" />
          </li>
          ))}
      </div>
    </div>
  )
}

export default Equipos