import React, {useState,useEffect} from 'react'

import llamadosEquipo from '../../services/llamadosEquipo'
import Swal from 'sweetalert2'
import 'boxicons'

function AdminRegistroE() {
    const [equipos, setEquipos]=useState([])
    
    useEffect(() => {
    async function fetchDataEquipos(){
        const datos = await llamadosEquipo.get()
        setEquipos(datos)
    };
    fetchDataEquipos();
    },[]);
    
    function eliminar(id) {
    Swal.fire({
        title: "¿Seguro que quieres eliminar este equipo?",
        showDenyButton: true,
        confirmButtonText: "Cancelar",
        denyButtonText: `Eliminar`
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire("No se eliminó el equipo", "", "info");
        } else if (result.isDenied) {
        Swal.fire("Eliminado correctamente", "", "success");
        llamadosEquipo.deleteT(id);
        actualizar()
        async function actualizar(){
            const datos = await llamadosEquipo.get()
            setEquipos(datos)
        }
        }
    });
    }
    
    return (
        <div>
            <div>
                {equipos.map((equipo,index) =>(
                <li key={index}>
                    <p><strong>{equipo.nombre}</strong></p>
                    <p><strong>Encargado: </strong>{equipo.encargado}</p>
                    <p>{equipo.descripcion}</p>
                    <input type="button" value="Unirme al grupo" />
                    <box-icon id='icono' onClick={e=>editar(equipo.id)} type='solid' name='pencil'></box-icon>
                    <box-icon id='icono' onClick={e=>eliminar(equipo.id)} type='solid' name='trash-alt'></box-icon>
                </li>
                ))}
            </div>
        </div>
    )
}

export default AdminRegistroE