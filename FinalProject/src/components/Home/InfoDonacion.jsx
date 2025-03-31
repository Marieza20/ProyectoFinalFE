import React from 'react'
import red from '../../img/red.jpg';

function InfoDonacion() {
  return (
    <div id='div'>
        <div id="ImgMain">
            <img src={red} alt="" />
        </div>
        <div id="main">
            <div id='Info'>
                <h2>Donaciones</h2>
                <p>Para continuar con la misión solidaria siempre es bienvenida cualquier ayuda que pueda brindar la sociedad. En este caso, las donaciones se refieren a cualquier ayuda económica o material que pueda brindar una persona en el momento que lo desee. Este apoyo es voluntario y no requiere de ningún compromiso con el proyecto.</p>
            </div>
            <div id='section'>
                <div id="Info">
                    <strong>¿Cuál es su importancia?</strong>
                    <p>Para que el proyecto pueda mantenerse activo siempre es necesaria la ayuda de la sociedad, en este caso, el proyecto demanda recursos muy específicos que son necesarios y de constante uso, por lo que es frecuente el gasto de estos mismos. Las donaciones ayudan a aminorar el gasto de estos elementos de uso frecuente.</p>
                </div>
            </div>
            <div id='section'>
                <div id="Info">
                    <strong>¿Cómo donar?</strong>
                    <p>Para realizar cualquier donación puedes hacer <a href="">click aquí</a> para acceder al WhatsApp con la coordinadora del proyecto, quien te indicará el procedimiento correspondiente.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoDonacion