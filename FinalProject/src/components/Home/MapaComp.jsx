import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function MapaComp() {
    const position = [9.984065703538677, -84.76844506728737]
    const positionPorvenir = [9.98114156732429, -84.78153890306525]
    const positionCentro = [9.980586619663644, -84.77332691889363]
    const positionCarrizal = [9.980234158447995, -84.76318790985147]
    const position20 = [9.983503717203961, -84.77237465771623]
    const positionStaEduviges =[9.985546062195326, -84.77822577889765]
    const positionFray = [9.986272780403358, -84.77266793252525]
    const positionSLuis = [9.987008843629626, -84.76305587122856]
    const positionHuerto = [9.983605680433042, -84.75644873336172]
    return (
        <div>
            <div id="id">
                
                <div id="mapa">
                    <MapContainer center={position} zoom={15} scrollWheelZoom={false} id='mapContainer'>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={positionPorvenir}>
                            <Popup>Iglesia de El Porvenir</Popup>
                        </Marker>
                        <Marker position={positionCentro}>
                            <Popup>Iglesia de Chacarita</Popup>
                        </Marker>
                        <Marker position={positionCarrizal}>
                            <Popup>Iglesia de Carrizal</Popup>
                        </Marker>
                        <Marker position={position20}>
                            <Popup>Iglesia de el 20 de Noviembre</Popup>
                        </Marker>
                        <Marker position={positionStaEduviges}>
                            <Popup>Iglesia de Santa Eduviges</Popup>
                        </Marker>
                        <Marker position={positionFray}>
                            <Popup>Iglesia de Fray Casiano</Popup>
                        </Marker>
                        <Marker position={positionSLuis}>
                            <Popup>Iglesia de San Luis</Popup>
                        </Marker>
                        <Marker position={positionHuerto}>
                            <Popup>Iglesia de El Huerto</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default MapaComp