import React, {useState,useEffect} from 'react'

import llamadosEquipo from '../../services/llamadosEquipo'
import Swal from 'sweetalert2'
import 'boxicons'
import '../../styles/Equipos.css'

function AdminRegistroE() {
    const [nombreEquipo, SetNombreEquipo]=useState()
    const [encargadoEquipo, SetEncargadoEquipo]=useState()
    const [descripcionEquipo, SetDescripcionEquipo]=useState()
    const [enlaceEquipo, SetEnlaceEquipo]=useState()
    const [equipos, setEquipos]=useState([])
    const [style, setStyle]=useState("oculto")

    useEffect(() => {
    async function fetchDataEquipos(){
        const datos = await llamadosEquipo.get()
        setEquipos(datos)
    };
    fetchDataEquipos();
    },[]);

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

    function editar(id) {
        const encontrado = equipos.find(equipo => equipo.id===id)
        if(style === "oculto"){
            setStyle("mostrar");
        }else{
            setStyle("oculto");
        }
    }

    async function cargar(id) {
        llamadosEquipo.update(nombreEquipo,encargadoEquipo,descripcionEquipo,enlaceEquipo,id)
        const datos = await llamadosEquipo.get()
        setEquipos(datos)
    }
    
    function eliminar(id) {
    Swal.fire({
        title: "¿Seguro que quieres eliminar este equipo?",
        showDenyButton: true,
        confirmButtonText: "Cancelar",
        denyButtonText: `Eliminar`
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire("No se eliminó el equipo", "");
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
            <div id='Container'>
                {equipos.map((equipo,index) =>(
                <li key={index}>
                    <div id="Card">
                        <div>
                            <h3>{equipo.nombre}</h3>
                            <p><strong>Encargado: </strong>{equipo.encargado}</p>
                        </div>
                        <p>{equipo.descripcion}</p>
                        <div id='btn'>
                            <input type="button" value="Unirme al grupo" />
                            <div>
                                <box-icon id='icono' onClick={e=>editar(equipo.id)} type='solid' name='pencil'></box-icon>
                                <box-icon id='icono' onClick={e=>eliminar(equipo.id)} type='solid' name='trash-alt'></box-icon>
                            </div>
                        </div>
                    </div>
                    <div id="ContainerFE" className={style}>
                        <div id='FormEquipo'>
                            <input onChange={nombre} value={nombreEquipo} type="text" placeholder={equipo.nombre} />
                            <input onChange={encargado} value={encargadoEquipo} type="text" placeholder={equipo.encargado} />
                            <textarea onChange={descripcion} value={descripcionEquipo} placeholder={equipo.descripcion}></textarea>
                            <input onChange={enlace} value={enlaceEquipo} type='text' placeholder={equipo.enlace} />
                            <box-icon onClick={e=>cargar(equipo.id)} name='check'></box-icon>
                        </div>
                    </div>
                </li>
                ))}
            </div>
        </div>
    )
}

export default AdminRegistroE