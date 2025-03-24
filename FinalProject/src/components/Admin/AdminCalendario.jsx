import React, { useState } from 'react'
import llamadosEventos from '../../services/llamadosEventos'

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

    function cargar() {
        llamadosEventos.post(nombreEvento,fechaEvento,lugarEvento,horaIEvento,horaFEvento)  
    }

    return (
        <div>
            <div id='ContainerF'>
                <div id="FormEquipo">
                    <input onChange={nombre} value={nombreEvento} type="text" placeholder='Nombre del Evento' />
                    <input onChange={fecha} value={fechaEvento} type="date" placeholder='Fecha del Evento' />
                    <input onChange={lugar} value={lugarEvento} type="text" placeholder='Lugar' />
                    <input onChange={horaI} value={horaIEvento} type="time" placeholder='Hora Inicio' />
                    <input onChange={horaF} value={horaFEvento} type="time" placeholder='Hora Fin' />
                    <box-icon onClick={cargar} name='check'></box-icon>
                </div>
            </div>
        </div>
    )
}

export default AdminCalendario