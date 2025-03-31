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
    <div id='div'>
      <div id="Container">
        {equipos.map((equipo,index) =>(
          <li key={index}>
            <div id="CardEquipos">
              <div>
                <p><strong>{equipo.nombre}</strong></p>
                <p><strong>Encargado: </strong>{equipo.encargado}</p>
              </div>
              <p>{equipo.descripcion}</p>
              <input id='btn' type="button" value="Unirme al grupo" />
            </div>
        </li>
        ))}
      </div>
    </div>
  )
}

export default Equipos