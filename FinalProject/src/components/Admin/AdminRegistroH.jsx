import React, {useState,useEffect} from 'react'
import llamadosHabitantes from '../../services/llamadosHabitantes'
import Swal from 'sweetalert2'
import 'boxicons'

function AdminRegistroH() {
    const [habitantes, setHabitantes]=useState([])
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
    const [editandoId, setEditandoId] = useState(null);

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

    function editar(id) {
        const encontrado = habitantes.find(habitante => habitante.id===id)
        setApodoHabitante(encontrado.apodo);
        setNombreHabitante(encontrado.nombre);
        setEdadHabitante(encontrado.edad);
        setCedulaHabitante(encontrado.cedula);
        setZonaHabitante(encontrado.zona);
        setAlimentacionHabitante(encontrado.alimentacion);
        setEstudiosHabitante(encontrado.estudios);
        setEnfermedadesHabitante(encontrado.enfermedades);
        setMedicamentosHabitante(encontrado.medicamentos);
        setAtencionMedHabitante(encontrado.atencionMed);
        setAtencionPsiHabitante(encontrado.atencionPsi);
        setlaboralHabitante(encontrado.laboral);
        setEditandoId(id);
    }

    async function cargar(id) {
        llamadosHabitantes.update(apodoHabitante,nombreHabitante,edadHabitante,cedulaHabitante,zonaHabitante,alimentacionHabitante,estudiosHabitante,enfermedadesHabitante,medicamentosHabitante,atencionMedHabitante,atencionPsiHabitante,laboralHabitante,id)
        const datos = await llamadosHabitantes.get();
        setHabitantes(datos);
        setEditandoId(null);
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
        <div id='div'>
            <div id='Container'>
                {habitantes.map((habitante,index) =>(
                <li key={index}>
                    <div>
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
                    </div>
                    {editandoId === habitante.id && (
                    <div  id="ContainerFE" className="mostrar">
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

                        <box-icon onClick={e=>cargar(habitante.id)} name='check'></box-icon>
                    </div>
                    )}
                </li>
                ))}
            </div>
        </div>
    )
}

export default AdminRegistroH