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
                <select onChange={zona} value={zonaHabitante} placeholder="Zona">
                    <option value="" selected>Elige la zona</option>
                    <option value="Porvenir">Porvenir</option>
                    <option value="20 de Noviembre">20 de Noviembre</option>
                    <option value="Chacarita">Chacarita</option>
                    <option value="Carrizal">Carrizal</option>
                    <option value="Huerto">El Huerto</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Eduviges">Santa Eduviges</option>
                    <option value="Fray Casiano">Fray Casiano</option>
                </select>
                <input onChange={alimentacion} value={alimentacionHabitante} type="text" placeholder='Alimentación' />
                <input onChange={estudios} value={estudiosHabitante} type="text" placeholder='Estudios' />
                <input onChange={enfermedades} value={enfermedadesHabitante} type="text" placeholder='Enfermedades' />
                <input onChange={medicamentos} value={medicamentosHabitante} type="text" placeholder='Medicamentos' />
                <input onChange={atencionMed} value={atencionMedHabitante} type="text" placeholder='Atención Médica' />
                <input onChange={atencionPsi} value={atencionPsiHabitante} type="text" placeholder='Atención Psicológica' />
                <input onChange={laboral} value={laboralHabitante} type="text" placeholder='Formación Laboral' />

                <input onClick={cargar} type="button" value="Agregar" />
            </div>
        </div>
    )
}

export default Admin