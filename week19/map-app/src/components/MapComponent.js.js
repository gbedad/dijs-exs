import React from 'react'
import { 
    GoogleMap, 
    withScriptjs,
    withGoogleMap,
    Marker,

} from "react-google-maps";

import '../style.css'



const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 32.0853, lng: 34.7818 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 32.0853, lng: 34.7818 }} />}
  </GoogleMap>
))

export default MapComponent