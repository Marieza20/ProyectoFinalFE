import React from 'react';
import '../../styles/AcercaDe.css';
import ps from '../../img/ps.jpg';
import ps2 from '../../img/ps2.jpg';
import rc from '../../img/rc.jpg';
import MapaComp from './MapaComp';

function AcercaDe() {
    return (
        <div id='div'>
            <div id="ImgMain">
                <img src={rc} alt="" />
            </div>
            <div id="container">
                <aside id='aside'>
                    <section>
                        <img id='img' src={ps2} alt="" />
                        <img id='img' src={ps} alt="" />
                    </section>
                </aside>
                <main id='main'>
                    <section id='section'>
                        <div id='Info'>
                            <strong>¿Qué es Rostro de Cristo?</strong>
                            <p>Se trata de una iniciativa que tiene la pastoral social de la parroquia La Santa Cruz, Nuestra Señora del Perpetuo Socorro en crear un proyecto que consiste en brindar apoyo y atención a los habitantes en estado de callegización.</p>
                            <br />
                            <p>Dentro de este apoyo se busca brindarles, de acuerdo a su consentimiento, alimentación al menos una vez a la semana, atención médica correspondiente, atención psicológica y talleres donde se les enseñe a realizar trabajos que los ayuden a integrarse nuevamente a la sociedad.</p>
                        </div>
                    </section>
                    <section id='section'>
                        <div id='Info'>
                            <strong>¿Cómo nace el proyecto?</strong>
                            <p>Este proyecto surge como una respuesta ante una necesidad poco observada dentro de la comunidad pero que está muy presente. Durante mucho tiempo la pastoral social de la parroquia se enfocó unicamente en la recolección de víveres para las familias que menos tienen, dejando en segundo plano a los hermanos en situación de calle.</p>
                            <br />
                            <p>El primer paso fue darse cuenta de que la necesidad existe y como comunidad que busca ser ejemplo de Cristo, la iglesia debe ser la primera en atenderla. Seguidamente, se realizó un análisis de los elementos necesarios y si se contaba con los lugares acondicionados para dar lugar al proyecto.</p>
                            <br />
                            <p>Es así como nace el proyecto Rostro de Cristo, que empezaría con la alimentación una vez por semana para los habitantes de calle y luego buscaría brindarles más opciones de apoyo.</p>
                        </div>
                    </section>
                    <section id='section'>
                        <div id='Info'>
                            <strong>¿Por qué "Rostro de Cristo?</strong>
                            <p>El nombre "Rostro de Cristo" tiene su origen nada más y nada menos que en un fundamento bíblico. Este se halla en las obras de misericordia en Mateo 25, 35-46, cuando Jesús da a entender que Él está en aquellos más necesitados, y que cada obra que se haga en favor de aquellos, se hará hacia Él.</p>
                        </div>
                    </section>
                    <MapaComp />
                </main>
            </div>
        </div>
    );
}

export default AcercaDe;