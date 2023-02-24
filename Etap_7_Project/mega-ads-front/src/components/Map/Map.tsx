import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'

import './Map.css'
import 'leaflet/dist/leaflet.css'

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[53.0107907,18.6147001]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />

                <Marker position={[53.0107907,18.6147001]}>
                    <Popup>
                        <h2>Moje miasto Toruń</h2>
                        <p>Super miejsce :)</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}