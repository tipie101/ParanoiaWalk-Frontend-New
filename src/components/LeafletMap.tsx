import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom:number = 8;
const url:string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const position: LatLngTuple = [51.505, -0.09]

const LeafletMap:React.FC = () => {
   return (
    <Map id="mapId"
          center={defaultLatLng}
          zoom={zoom}>
      <TileLayer
         url={url}
         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>
      <Marker position={position}>
        <Popup>Start Your Journey</Popup>
      </Marker>
   </Map>
   )
}
export default LeafletMap;
