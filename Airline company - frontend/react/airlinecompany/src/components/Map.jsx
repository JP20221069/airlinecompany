import React from 'react'
import { useMemo } from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";


function Map() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if(!isLoaded) return <div>Loading...</div>;
  return (
    <div>
        <GoogleMap zoom={5} center={{lat: 44, lng: 20}} mapContainerClassName="map-container">
        <Marker position={{lat: 44.787197, lng: 20.457273}}/>
            <Marker position={{lat: 52.520008, lng: 13.40495}}/>
            <Marker position={{lat: 40.730610, lng: -73.935242}}/>
            <Marker position={{lat: 55.751244, lng: 37.618423}}/>
            <Marker position={{lat: 35.652832, lng: 139.839478}}/>
        </GoogleMap>
    </div>
  )
}



export default Map