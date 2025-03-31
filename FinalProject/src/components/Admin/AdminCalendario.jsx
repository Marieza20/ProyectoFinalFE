import React, { useState } from 'react'
import llamadosEventos from '../../services/llamadosEventos'
import Swal from 'sweetalert2';

function AdminCalendario() {
    const [nombreEvento, SetNombreEvento]=useState()
    const [fechaEvento, SetFechaEvento]=useState()
    const [lugarEvento, SetLugarEvento]=useState()
    const [horaIEvento, SetHoraIEvento]=useState()
    const [horaFEvento, SetHoraFEvento]=useState()

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

    function validarFormulario() {
        if (!nombreEvento || !fechaEvento || !lugarEvento || !horaIEvento || !horaFEvento) {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos.',
            });
            return false;
        }
    return true;
    }

    function cargar() {
    if (validarFormulario()) {
        llamadosEventos.post(nombreEvento,fechaEvento,lugarEvento,horaIEvento,horaFEvento)
        window.location.reload();  
    }
    }

    return (
        <div id='div'>
            <div id='ContainerF'>
                <div id="Form">
                    <h3>Añadir Eventos</h3>
                    <input onChange={nombre} value={nombreEvento} type="text" placeholder='Nombre del Evento' />
                    <input onChange={fecha} value={fechaEvento} type="date" placeholder='Fecha del Evento' />
                    <input onChange={lugar} value={lugarEvento} type="text" placeholder='Lugar' />
                    <input onChange={horaI} value={horaIEvento} type="time" placeholder='Hora Inicio' />
                    <input onChange={horaF} value={horaFEvento} type="time" placeholder='Hora Fin' />
                </div>
                <input onClick={cargar} type="button" value="Agregar" id='btn' />
            </div>
        </div>
    )
}

export default AdminCalendario