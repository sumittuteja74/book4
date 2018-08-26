import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  export const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat:28.644800 , lng: 77.216721 }}
    >
      <Marker
        position={{ lat: 28.644800, lng: 77.216721 }}
      />
    </GoogleMap>
  ));
  
  