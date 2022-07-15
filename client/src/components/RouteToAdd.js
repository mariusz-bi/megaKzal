import React from "react";

export const RouteToAdd = (props) => {

  if (props.singleRoute === null) return null
  return (
    <div className="singleRoute">
      <h2>Do you want to add this route to your list?</h2>
      <p>{props.singleRoute.date}</p>
      <p>{props.singleRoute.startPoint}</p>
      <p>{props.singleRoute.endPoint}</p>
      <p>{props.singleRoute.distance}</p>
      <button onClick={props.send}>add route</button>
    </div>
  )
};