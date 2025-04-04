import React, { useState,useEffect } from 'react'
import llamadosEventos from '../../services/llamadosEventos';
import Swal from 'sweetalert2';
import 'boxicons'

function AdminRegistroC() {
    const [eventos, setEventos]=useState([])
    const [nombreEvento, SetNombreEvento]=useState()
    const [fechaEvento, SetFechaEvento]=useState()
    const [lugarEvento, SetLugarEvento]=useState()
    const [horaIEvento, SetHoraIEvento]=useState()
    const [horaFEvento, SetHoraFEvento]=useState()
    const [editandoId, setEditandoId] = useState(null);

    useEffect(() => {
        async function fetchDataEventos(){
            const datos = await llamadosEventos.get()
            setEventos(datos)
        };
        fetchDataEventos();
    },[]);

    function nombre(evento) {
        SetNombreEvento(evento.target.value)
    }

    function fecha(evento) {
        SetFechaEvento(evento.target.value)
    }

    function lugar(evento) {
        SetLugarEvento(evento.target.value)
    }

    function horaI(evento) {
        SetHoraIEvento(evento.target.value)
    }

    function horaF(evento) {
        SetHoraFEvento(evento.target.value)
    }

    function editar(id) {
        const encontrado = eventos.find(evento => evento.id === id);
        SetNombreEvento(encontrado.nombre);
        SetFechaEvento(encontrado.fecha);
        SetLugarEvento(encontrado.lugar);
        SetHoraIEvento(encontrado.horai);
        SetHoraFEvento(encontrado.horaf);
        setEditandoId(id);
    }

    async function cargar(id) {
        llamadosEventos.update(nombreEvento,fechaEvento,lugarEvento,horaIEvento,horaFEvento,id)  
        const datos = await llamadosEventos.get()
        setEventos(datos)
        setEditandoId(null);
        Swal.fire("Editado correctamente", "", "success");
    }

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
                window.location.reload();
            }
            }
        });
    }

    // Ordenamos los eventos por fecha (convertimos fecha a objetos Date)
    const eventosOrdenados = eventos.sort((a, b) => {
        const fechaA = new Date(a.fecha);
        const fechaB = new Date(b.fecha);
        return fechaA - fechaB;
    });


    return (
        <div id='div'>
            <div id='Container'>
                {eventos.map((evento,index) =>(
                <li key={index}>
                    <div id='CardEquipos'>
                        <h3>{evento.fecha}</h3>
                        <div>
                            <strong>{evento.nombre}</strong>
                            <p><strong>Lugar: </strong>{evento.lugar}</p>
                            <p><strong>Hora de Inicio: </strong>{evento.horai}</p>
                            <p><strong>Hora de Finalización: </strong>{evento.horaf}</p>
                        </div>
                        <div id='botones'>
                            <input onClick={e=>editar(evento.id)} type="button" value="Editar" id='btn' />
                            <input onClick={e=>eliminar(evento.id)} type="button" value="Eliminar" id='btn' />
                        </div>
                    </div>
                    {editandoId === evento.id && (
                    <div id="ContainerFE" className="mostrar">
                        <div id="Form">
                            <input onChange={nombre} value={nombreEvento} type="text" />
                            <input onChange={fecha} value={fechaEvento} type="date" />
                            <input onChange={lugar} value={lugarEvento} type="text" />
                            <input onChange={horaI} value={horaIEvento} type="time" />
                            <input onChange={horaF} value={horaFEvento} type="time" />
                        </div>
                        <input onClick={e=>cargar(evento.id)} type="button" value="Guardar" id='btn' />
                    </div>
                    )}
                </li>
                ))}
        </div>
        </div>
    )
}

export default AdminRegistroC