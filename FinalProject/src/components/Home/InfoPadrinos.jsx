import React from 'react'
import red from '../../img/red.jpg';

function InfoPadrinos() {
  return (
    <div id='div'>
        <div id="ImgMain">
            <img src={red} alt="" />
        </div>
        <div id="main">
            <div id='Info'>
                <h2>Padrinos</h2>
                <p>Los Padrinos son un grupo comprometido de individuos que, de manera voluntaria y constante, se unen para apoyar un proyecto de bien social mediante donaciones mensuales. Cada padrino realiza una contribución económica regular y fija, asegurando la sostenibilidad del proyecto y ayudando a que este logre su propósito.</p>
            </div>
            <div id='section'>
                <div id="Info">
                    <strong>¿Cuál es su importancia?</strong>
                    <p>Este grupo es esencial para la estabilidad financiera del proyecto, permitiendo su continuidad y expansión en el tiempo, y garantizando que las acciones que se llevan a cabo tengan un impacto duradero. Además, los padrinos son testigos del progreso del proyecto, formando parte activa del impacto positivo que se genera.</p>
                </div>
            </div>
            <div id='section'>
                <div id="Info">
                    <strong>¿Cómo formar parte?</strong>
                    <p>Para formar parte del grupo de "padrinos" puedes hacer <a href="">click aquí</a> para acceder al WhatsApp con la coordinadora del proyecto, quien te indicará el procedimiento correspondiente.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoPadrinos