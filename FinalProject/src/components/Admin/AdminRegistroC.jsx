import React, { useState,useEffect } from 'react'
import llamadosEventos from '../../services/llamadosEventos';
import Swal from 'sweetalert2'

function AdminRegistroC() {
    const [eventos, setEventos]=useState([])

    useEffect(() => {
        async function fetchDataEventos(){
            const datos = await llamadosEventos.get()
            setEventos(datos)
        };
        fetchDataEventos();
    },[]);

    function eliminar(id) {
        Swal.fire({
            title: "¿Seguro que quieres eliminar este evento?",
            showDenyButton: true,
            confirmButtonText: "Cancelar",
            denyButtonText: `Eliminar`
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire("No se eliminó el evento", "", "info");
            } else if (result.isDenied) {
            Swal.fire("Eliminado correctamente", "", "success");
            llamadosEventos.deleteT(id);
            actualizar()
            async function actualizar(){
                const datos = await llamadosEventos.get()
                setEventos(datos)
            }
            }
        });
    }

    return (
        <div>
            <div>
                {eventos.map((evento,index) =>(
                <li key={index}>
                    <div>
                        <h2><button type="button">{evento.fecha}</button></h2>
                        <div>
                            <div>
                                <p>{evento.nombre}</p>
                                <p>{evento.lugar}</p>
                                <p>{evento.horai}</p>
                                <p>{evento.horaf}</p>
                                <box-icon id='icono' onClick={e=>editar(evento.id)} type='solid' name='pencil'></box-icon>
                                <box-icon id='icono' onClick={e=>eliminar(evento.id)} type='solid' name='trash-alt'></box-icon>
                            </div>
                        </div>
                    </div>
                </li>
                ))}
        </div>
        </div>
    )
}

export default AdminRegistroC