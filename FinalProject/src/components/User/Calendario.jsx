import React, {useState,useEffect} from 'react'
import llamadosEventos from '../../services/llamadosEventos';
import 'boxicons'

function Calendario() {
  const [eventos, setEventos]=useState([])
  
  useEffect(() => {
  async function fetchDataEventos(){
      const datos = await llamadosEventos.get()
      setEventos(datos)
  };
  fetchDataEventos();
  },[]);

  return (
    <div id='div'>
      <div id='Container'>
        {eventos.map((evento,index) =>(
        <li key={index}>
          <div id="CardEquipos">
            <h3>{evento.fecha}</h3>
            <div>
                <strong>{evento.nombre}</strong>
                <p><strong>Lugar: </strong>{evento.lugar}</p>
                <p><strong>Hora de Inicio: </strong>{evento.horai}</p>
                <p><strong>Hora de Finalización: </strong>{evento.horaf}</p>
            </div>
            <input id='btn' type="button" value="Confirmar Asistencia" />
          </div>
        </li>
        ))}
      </div>
    </div>
  )
}

export default Calendario