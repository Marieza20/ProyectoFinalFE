import React, {useState,useEffect} from 'react'

import llamadosHabitantes from '../../services/llamadosHabitantes'
import Swal from 'sweetalert2'
import 'boxicons'

function AdminRegistro() {
    const [habitantes, setHabitantes]=useState([])
    
    useEffect(() => {
    async function fetchDataHabitantes(){
        const datos = await llamadosHabitantes.get()
        setHabitantes(datos)
    };
    fetchDataHabitantes();
    },[]);

    function editar(id){
        Swal.fire({
          title: "Editar",
          icon: "info",
          input: "text",
          inputValue: habitantes.nombre,
          showCancelButton: true,
          confirmButtonText: "Guardar",
        }).then((result) => {
          if (result.isConfirmed) {
            const nuevoNombre = result.value;
            Swal.fire("Guardado", "", "success");
            //const encontrado = tareas.map(tarea => tarea[estado].id)
            const encontrado2 = tareas.find(tarea => tarea.id===id)        
            llamadosTareas.update(nuevoNombre,encontrado2.estado,id);
            actualizar()
            async function actualizar(){
              const datos = await llamadosHabitantes.get()
              setHabitantes(datos)
            }
          }
        });
    }
    
    function eliminar(id) {
    Swal.fire({
        title: "¿Seguro que quieres eliminar este registro?",
        showDenyButton: true,
        confirmButtonText: "Cancelar",
        denyButtonText: `Eliminar`
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire("No se eliminó el registro", "", "info");
        } else if (result.isDenied) {
        Swal.fire("Eliminado correctamente", "", "success");
        llamadosHabitantes.deleteT(id);
        actualizar()
        async function actualizar(){
            const datos = await llamadosHabitantes.get()
            setHabitantes(datos)
        }
        }
    });
    }
    
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
                    <box-icon id='icono' onClick={e=>editar(habitante.id)} type='solid' name='pencil'></box-icon>
                    <box-icon id='icono' onClick={e=>eliminar(habitante.id)} type='solid' name='trash-alt'></box-icon>
                </li>
                ))}
            </div>
        </div>
    )
}

export default AdminRegistro