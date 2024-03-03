import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet";
import { StringLiteral } from "typescript"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import coordinateDTO from '../utils/coordinate.model'
import { useState } from "react";
import coordianteDTO from "../utils/coordinate.model";

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16,37]
})

L.Marker.prototype.options.icon = defaultIcon


export default function Map(props: mapProps) {
    const [coordinates, setCoordinates] = useState<coordianteDTO[]>(props.coordinates);
    return (
        <MapContainer
            center={[18.899640, -69.446391]} zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick setCoordinates={coordinates =>{
                setCoordinates([coordinates])
                props.handleMapClick(coordinates)
                }
            }/>

            {coordinates.map((coordinate, index) => <Marker  key={index} position={[coordinate.lat,coordinate.lgn]}/>)}
        </MapContainer>
    )
}

interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void
}

Map.defaultProps = {
    height: '500px'
}

function MapClick(props: mapClickProps) {
    useMapEvent('click', eventArgs => {
        props.setCoordinates({lat: eventArgs.latlng.lat, lgn: eventArgs.latlng.lng})
    })
    return null;
}

interface mapClickProps {
    setCoordinates(coordinates: coordinateDTO): void
}