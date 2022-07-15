import React, {useRef, useState} from "react";
import axios from "axios";


import "./RouteInput.css";

import {useJsApiLoader,
  Autocomplete,
  } from "@react-google-maps/api";
import {RouteToAdd} from "./RouteToAdd";

export const RouteInput = props => {

  const [date, setDate] = useState(new Date().toLocaleDateString());

  console.log(date);
  const dateReversedForBrowserToDisplay = date => date.split(".").reverse().join("-");
  const {isLoaded} = useJsApiLoader( {
    googleMapsApiKey: process.env["REACT_APP_GOOGLE_MAPS_API_KEY"],
    libraries: ['places'],
  });

  const [distance, setDistance] = useState('');
  const [singleRoute, setSingleRoute] = useState(null);

  const startPointRef = useRef();

  const endPointRef = useRef();

  if (!isLoaded) {
    return <h1>Nie ma połączenia z google maps</h1>
  }

  const calculateRoute = async () => {
    if (startPointRef.current.value === '' || endPointRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: startPointRef.current.value,
      destination: endPointRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    const distFixed = ((results.routes[0].legs[0].distance.value)/1000).toFixed(2);
    setDistance(distFixed);
  setSingleRoute({
    date, startPoint: startPointRef.current.value, endPoint: endPointRef.current.value, distance: distFixed}) ;
  }

  const clearRoute = () =>{

    setDistance('');
    startPointRef.current.value = '';
    endPointRef.current.value = '';
    setSingleRoute(null);


  }
  const sendRoute = () => {
    console.log(singleRoute.date);
    axios.post('http://localhost:3001/route', {
      date: singleRoute.date,
      startpoint: singleRoute.startPoint,
      endpoint: singleRoute.endPoint,
      duration: singleRoute.distance,

    }).then (() => {
      console.log('done');
    });
    clearRoute();
    setSingleRoute(null);
  }

  return (
    <div className="RouteInput">

      <div className="information">
      <label htmlFor="date">Date:</label>
      <input id="date" type="date" min="2021-01-01" value={dateReversedForBrowserToDisplay(date)} onChange={ e => setDate(e.target.value)}/>
      <label htmlFor="start__point">Start point</label>
        <Autocomplete>
          <input id="start__point" type="text" ref={startPointRef}/>
        </Autocomplete>

      <label htmlFor="end__point">End point</label>
        <Autocomplete>
          <input id="end__point" type="text" ref={endPointRef}/>
        </Autocomplete>

      <label htmlFor="distance">Distance</label>
      <input id="distance" type="text" value={`${distance} km`}/>
      <button onClick={calculateRoute}>Calculate and show route</button>
        <button onClick={clearRoute}>Clear route</button>
        <RouteToAdd singleRoute={singleRoute} send={sendRoute}/>
    </div>


    </div>


  );
}