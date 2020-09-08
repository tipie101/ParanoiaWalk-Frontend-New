import React, { useContext } from 'react';
import { LayerGroup, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple, LatLng } from 'leaflet';
import { LayerContext } from './context/LayerContext';
import AddMarkerButton from './AddMarkerButton';

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom:number = 8;
const url:string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";


const LeafletMap:React.FC = () => {

   const { points } = useContext(LayerContext);
   // const points:LatLngTuple[] = [[41.505, -0.09]]

   return (
    <Map id="mapId"
          center={defaultLatLng}
          zoom={zoom}>
      {/* <LayerGroup>{position}</LayerGroup> */}
      <TileLayer
         url={url}
         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>
      <AddMarkerButton />
      <LayerGroup>
         {points}
      </LayerGroup>
      {/* {points.map((point: LatLngTuple) => {
         return <Marker position={point}><Popup>End Your Journey</Popup></Marker>
      })} */}
   </Map>
   )
}
export default LeafletMap;
