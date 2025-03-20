import React, { useState,useEffect } from 'react'

import llamadosHabitantes from '../../services/llamadosHabitantes'

function Admin() {
    const [apodoHabitante, setApodoHabitante]=useState()
    const [nombreHabitante, setNombreHabitante]=useState()
    const [edadHabitante, setEdadHabitante]=useState()
    const [cedulaHabitante, setCedulaHabitante]=useState()
    const [zonaHabitante, setZonaHabitante]=useState()
    const [alimentacionHabitante, setAlimentacionHabitante]=useState()
    const [estudiosHabitante, setEstudiosHabitante]=useState()
    const [enfermedadesHabitante, setEnfermedadesHabitante]=useState()
    const [medicamentosHabitante, setMedicamentosHabitante]=useState()
    const [atencionMedHabitante, setAtencionMedHabitante]=useState()
    const [atencionPsiHabitante, setAtencionPsiHabitante]=useState()
    const [laboralHabitante, setlaboralHabitante]=useState()
    const [habitantes, setHabitantes]=useState([])
    
    useEffect(() => {
    async function fetchDataHabitantes(){
        const datos = await llamadosHabitantes.get()
        setHabitantes(datos)
    };
    fetchDataHabitantes();
    },[]);

    function apodo(evento) {
        setApodoHabitante(evento.target.value)
    }

    function nombre(evento) {
        setNombreHabitante(evento.target.value)
    }

    function edad(evento) {
        setEdadHabitante(evento.target.value)
    }

    function cedula(evento) {
        setCedulaHabitante(evento.target.value)
    }

    function zona(evento) {
        setZonaHabitante(evento.target.value)
    }

    function alimentacion(evento) {
        setAlimentacionHabitante(evento.target.value)
    }

    function estudios(evento) {
        setEstudiosHabitante(evento.target.value)
    }

    function enfermedades(evento) {
        setEnfermedadesHabitante(evento.target.value)
    }

    function medicamentos(evento) {
        setMedicamentosHabitante(evento.target.value)
    }

    function atencionMed(evento) {
        setAtencionMedHabitante(evento.target.value)
    }

    function atencionPsi(evento) {
        setAtencionPsiHabitante(evento.target.value)
    }

    function laboral(evento) {
        setlaboralHabitante(evento.target.value)
    }

    async function cargar() {
        llamadosHabitantes.post(apodoHabitante,nombreHabitante,edadHabitante,cedulaHabitante,zonaHabitante,alimentacionHabitante,estudiosHabitante,enfermedadesHabitante,medicamentosHabitante,atencionMedHabitante,atencionPsiHabitante,laboralHabitante)
        const datos = await llamadosHabitantes.get()
        setHabitantes(datos)
    }

    return (
        <div>
            <div>
                <input onChange={apodo} value={apodoHabitante} type="text" placeholder='Apodo' />
                <input onChange={nombre} value={nombreHabitante} type="text" placeholder='Nombre' />
                <input onChange={edad} value={edadHabitante} type="number" placeholder='Edad' />
                <input onChange={cedula} value={cedulaHabitante} type="number" placeholder='Cédula' />
                <select onChange={zona} value={zonaHabitante}>
                    <option value="" selected>Zona</option>
                    <option value="Porvenir">Porvenir</option>
                    <option value="20 de Noviembre">20 de Noviembre</option>
                    <option value="Chacarita">Chacarita</option>
                    <option value="Carrizal">Carrizal</option>
                    <option value="El Huerto">El Huerto</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Eduviges">Santa Eduviges</option>
                    <option value="Fray Casiano">Fray Casiano</option>
                    <option value="Fuera de Chacarita">Fuera de Chacarita</option>
                </select>
                <select onChange={alimentacion} value={alimentacionHabitante}>
                    <option value="" selected>Frecuencia de la alimentación</option>
                    <option value="Una vez por semana">Una vez por semana</option>
                    <option value="Una vez por quincena">Una vez por quincena</option>
                    <option value="Una vez por mes">Una vez por quincena</option>
                    <option value="No recibe">No recibe</option>
                </select>
                <select onChange={estudios} value={estudiosHabitante}>
                    <option value="" selected>Nivel de Estudios</option>
                    <option value="Sin Estudios">Sin Estudios</option>
                    <option value="Primaria incompleta">Primaria incompleta</option>
                    <option value="Primaria completa">Primaria completa</option>
                    <option value="Secundaria incompleta">Secundaria incompleta</option>
                    <option value="Secundaria completa">Secundaria completa</option>
                    <option value="Universidad incompleta">Universidad incompleta</option>
                    <option value="Universidad completa">Universidad completa</option>
                </select>
                <select onChange={enfermedades} value={enfermedadesHabitante}>
                    <option value="" selected>¿Padece alguna enfermedad?</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
                <select onChange={medicamentos} value={medicamentosHabitante}>
                    <option value="" selected>¿Necesita Medicamentos?</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
                <select onChange={atencionMed} value={atencionMedHabitante}>
                    <option value="" selected>¿Recibe Atención Médica?</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
                <select onChange={atencionPsi} value={atencionPsiHabitante}>
                    <option value="" selected>¿Recibe Atención Psicológica?</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
                <select onChange={laboral} value={laboralHabitante}>
                    <option value="" selected>¿Recibe Formación Laboral?</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>

                <input onClick={cargar} type="button" value="Agregar" />
            </div>
        </div>
    )
}

export default Admin