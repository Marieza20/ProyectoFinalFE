import React, {useState,useEffect} from 'react'
import llamadosHabitantes from '../../services/llamadosHabitantes'

function RegistroHabitantes() {
  const [habitantes, setHabitantes]=useState([])

  useEffect(() => {
    async function fetchDataHabitantes(){
      const datos = await llamadosHabitantes.get()
      setHabitantes(datos)
    };
    fetchDataHabitantes();
  },[]);

  return (
    <div>
        <div>
            {habitantes.map((habitante,index) =>(
              <li key={index}>
                <p><strong>Apodo: </strong>{habitante.apodo}</p>
                <p><strong>Nombre: </strong>{habitante.nombre}</p>
                <p><strong>Edad: </strong>{habitante.edad}</p>
                <p><strong>Cédula: </strong>{habitante.cedula}</p>
                <p><strong>Zona: </strong>{habitante.zona}</p>
                <p><strong>Alimentación: </strong>{habitante.alimentacion}</p>
                <p><strong>Estudios: </strong>{habitante.estudios}</p>
                <p><strong>Enfermedades: </strong>{habitante.enfermedades}</p>
                <p><strong>Medicamentos: </strong>{habitante.medicamentos}</p>
                <p><strong>Atención Médica: </strong>{habitante.atencionMed}</p>
                <p><strong>Atención Psicológica: </strong>{habitante.atencionPsi}</p>
                <p><strong>Formación Laboral: </strong>{habitante.laboral}</p>
              </li>
            ))}
        </div>
    </div>
  )
}

export default RegistroHabitantes