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
    <div>
      <div>
        {eventos.map((evento,index) =>(
        <li key={index}>
          <div className="accordion-item">
            <h2>
              <button type="button">
                Sábado 1 de Marzo
              </button>
            </h2>
            <div>
              <div className="accordion-body">
                <p>{evento.nombre}</p>
                <p>{evento.lugar}</p>
                <p>{evento.hora}</p>
                <box-icon name='check'></box-icon>
                <box-icon name='x'></box-icon>
              </div>
            </div>
          </div>
        </li>
        ))}
      </div>
    </div>
  )
}

export default Calendario