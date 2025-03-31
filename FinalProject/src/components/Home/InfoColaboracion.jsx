import React from 'react'
import red from '../../img/red.jpg';

function InfoColaboracion() {
  return (
    <div id='div'>
      <div id="ImgMain">
          <img src={red} alt="" />
      </div>
      <div id="main">
        <div id='Info'>
          <h2>Empresas Solidarias</h2>
          <p>Las Empresas Solidarias son aliados fundamentales en la misión de proporcionar apoyo constante a los habitantes de la calle. Estas empresas, comprometidas con la causa, aportan generosamente bienes, alimentos, servicios o recursos económicos para garantizar la alimentación, la atención médica, la ropa y otros servicios esenciales para quienes más lo necesitan.</p>
        </div>
        <div id='section'>
          <div id="Info">
              <strong>¿Cuál es su importancia?</strong>
              <p>El rol de las Empresas Solidarias es clave para la sostenibilidad y expansión del proyecto. A través de su colaboración continua, se asegura que el impacto de la iniciativa no solo sea inmediato, sino que también perdure en el tiempo, mejorando la calidad de vida de las personas en situación de calle y ayudando en su proceso de rehabilitación y reintegración social.</p>
          </div>
        </div>
        <div id='section'>
          <div id="Info">
              <strong>¿Cómo puedo colaborar?</strong>
              <p>Para colaborar como Empresa Solidaria puedes hacer <a href="">click aquí</a> para acceder al WhatsApp con la coordinadora del proyecto, quien te indicará el procedimiento correspondiente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoColaboracion