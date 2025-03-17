import React from 'react'
import '../../styles/Prueba.css'
import '../../styles/AcercaDe.css'
import ps from '../../img/ps.jpg'
import ps2 from '../../img/ps2.jpg'

function AcercaDe() {
  return (
    <div>
        <div id="container">
            <aside id='aside'>
                <section>
                    <img id='img' src={ps} alt="" />
                </section>
                <section>
                    <img id='img' src={ps2} alt="" />
                </section>
            </aside>
            <main id='main'>
                <section>
                    <div id='caja'></div>
                    <div>
                        <strong>¿Qué es Rostro de Cristo?</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia tempora, nostrum illo aliquid repellendus asperiores distinctio facere labore maxime similique accusamus iure qui cumque, dolor voluptatibus reprehenderit!</p>
                        <p>Aliquid eaque, repellat ducimus, neque recusandae quod eum voluptas perferendis, consequuntur excepturi cupiditate necessitatibus delectus aliquam inventore adipisci provident hic quia ab.</p>
                    </div>
                </section>
                <section>
                    <div>
                        <strong>¿Cómo nace el proyecto?</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia tempora, nostrum illo aliquid repellendus asperiores distinctio facere labore maxime similique accusamus iure qui cumque, dolor voluptatibus reprehenderit!</p>
                        <p>Aliquid eaque, repellat ducimus, neque recusandae quod eum voluptas perferendis, consequuntur excepturi cupiditate necessitatibus delectus aliquam inventore adipisci provident hic quia ab.</p>
                    </div>
                    <div id='caja'></div>
                </section>
                <section>
                    <h2>Entrevista completa con Sione González, coordinadora del proyecto</h2>
                    <div id="cajaG"></div>
                </section>
            </main>
        </div>
    </div>
  )
}

export default AcercaDe