import React, { useEffect } from 'react';
import '../../styles/Prueba.css';
import '../../styles/AcercaDe.css';
import ps from '../../img/ps.jpg';
import ps2 from '../../img/ps2.jpg';
import Logo from '../../img/logo.jpg';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function AcercaDe() {
    const position = [51.505, -0.09]

    return (
        <div id='div'>
            <div id="container">
                <aside id='aside'>
                    <section>
                        <img id='img' src={ps2} alt="" />
                    </section>
                    <section>
                        <img id='img' src={ps} alt="" />
                    </section>
                </aside>
                <main id='main'>
                    <section id='section'>
                        <div id='cajaImg'>
                            <img id='img' src={Logo} alt="" />
                        </div>
                        <div id='Info'>
                            <strong>¿Qué es Rostro de Cristo?</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia tempora, nostrum illo aliquid repellendus asperiores distinctio facere labore maxime similique accusamus iure qui cumque, dolor voluptatibus reprehenderit!</p>
                            <p>Aliquid eaque, repellat ducimus, neque recusandae quod eum voluptas perferendis, consequuntur excepturi cupiditate necessitatibus delectus aliquam inventore adipisci provident hic quia ab.</p>
                        </div>
                    </section>
                    <section id='section'>
                        <div>
                            <strong>¿Cómo nace el proyecto?</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia tempora, nostrum illo aliquid repellendus asperiores distinctio facere labore maxime similique accusamus iure qui cumque, dolor voluptatibus reprehenderit!</p>
                            <p>Aliquid eaque, repellat ducimus, neque recusandae quod eum voluptas perferendis, consequuntur excepturi cupiditate necessitatibus delectus aliquam inventore adipisci provident hic quia ab.</p>
                        </div>
                        <div id='caja'></div>
                    </section>
                    <section id='section'>
                        <div>
                            <h3>Entrevista completa con Sione González, coordinadora del proyecto</h3>
                            <div id="cajaG"></div>
                        </div>
                    </section>

                    <section>
                        <div id="map">
                            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default AcercaDe;
