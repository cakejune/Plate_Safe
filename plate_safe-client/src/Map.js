import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';

function Map({ restaurantData, getCoordinates }) {
    const markerLoc = getCoordinates();
    const position = [40.730610, -73.935242];
    return (
        <MapContainer className='map' height={100} center={position} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&amp;copy <a href=“http://osm.org/copyright”>OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerLoc.map(coordinate => {
              <Marker position={coordinate}>
                <Popup>{restaurantData.name}</Popup>
              </Marker>
            })}
        </MapContainer>
    );
}


export default Map;