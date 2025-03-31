import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function MapaCompDonacion() {
    const position20 = [9.983503717203961, -84.77237465771623]
    return (
        <div>
            <div id="id">
                <div id="mapa">
                    <MapContainer center={position20} zoom={16} scrollWheelZoom={false} id='mapContainer'>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position20}>
                            <Popup>Iglesia de el 20 de Noviembre</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <p id='centrar'>Ubicación Casa Cural de la parroquia de Chacarita.</p>
            </div>
        </div>
    )
}

export default MapaCompDonacion