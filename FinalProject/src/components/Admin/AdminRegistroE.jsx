import React, {useState,useEffect} from 'react'
import llamadosEquipo from '../../services/llamadosEquipo'
import Swal from 'sweetalert2'
import 'boxicons'
import '../../styles/Equipos.css'

function AdminRegistroE() {
    const [equipos, setEquipos]=useState([])
    const [nombreEquipo, SetNombreEquipo]=useState()
    const [encargadoEquipo, SetEncargadoEquipo]=useState()
    const [descripcionEquipo, SetDescripcionEquipo]=useState()
    const [editandoId, setEditandoId] = useState(null);

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

    function editar(id) {
        const encontrado = equipos.find(equipo => equipo.id===id)
        SetNombreEquipo(encontrado.nombre);
        SetEncargadoEquipo(encontrado.encargado);
        SetDescripcionEquipo(encontrado.descripcion);
        SetEnlaceEquipo(encontrado.enlace);
        setEditandoId(id);
    }

    async function cargar(id) {
        llamadosEquipo.update(nombreEquipo,encargadoEquipo,descripcionEquipo,enlaceEquipo,id)
        const datos = await llamadosEquipo.get()
        setEquipos(datos)
        setEditandoId(null);
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
            window.location.reload();
        }
        }
    });
    }
    
    return (
        <div id='div'>
            <div id='Container'>
                {equipos.map((equipo,index) =>(
                <li key={index}>
                    <div id="CardEquipos">
                        <div>
                            <h3>{equipo.nombre}</h3>
                            <p><strong>Encargado: </strong>{equipo.encargado}</p>
                        </div>
                        <p>{equipo.descripcion}</p>
                        <div id='botones'>
                            <input onClick={e=>editar(equipo.id)} type="button" value="Editar" id='btn' />
                            <input onClick={e=>eliminar(equipo.id)} type="button" value="Eliminar" id='btn' />
                        </div>
                    </div>
                    {editandoId === equipo.id && (
                    <div id="ContainerFE" className="mostrar">
                        <div id='Form' className='Form'>
                            <input onChange={nombre} value={nombreEquipo} type="text" />
                            <input onChange={encargado} value={encargadoEquipo} type="text" />
                            <textarea onChange={descripcion} value={descripcionEquipo}></textarea>
                        </div>
                        <input onClick={e=>cargar(equipo.id)} type="button" value="Guardar" id='btn' />
                    </div>
                    )}
                </li>
                ))}
            </div>
        </div>
    )
}

export default AdminRegistroE