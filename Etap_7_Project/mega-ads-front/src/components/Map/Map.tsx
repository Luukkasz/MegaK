import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'

import './Map.css'
import 'leaflet/dist/leaflet.css'
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from "types";
import {SingleAd} from "./SingleAd";
import {apiUrl} from "../../config/api";

export const Map = () => {
    const {search} = useContext(SearchContext)
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/ad/search/${search}`)
            const data = await res.json()

            setAds(data)
        })();
    }, [search])

    return (
        <div className="map">
            <MapContainer center={[53.0107907, 18.6147001]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />

                {!!ads.length && ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                            <SingleAd id={ad.id} />
                        </Popup>
                    </Marker>
                ))}


            </MapContainer>
        </div>
    )
}