import React from "react";
import {MapView} from "./views/MapView";
import {ListView} from "./views/ListView";
import {Link, Route, Routes} from "react-router-dom";

import "./App.css"


export const App = () => {
  return (
    <div className="App">
      <h1>route add and list for employer monthly report</h1>
      <button><Link to="/map">Serch and add route</Link></button>
      <button><Link to="/list">Display monthly list routes</Link></button>
 <Routes>
   <Route path="/map" element={<MapView />} />
   <Route path="/list" element={<ListView />} />
 </Routes>
    </div>
  );
}


