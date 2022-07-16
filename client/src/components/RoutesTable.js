import React from "react";
import {RouteTableRow} from "./RouteTableRow";

export const RoutesTable = props => {
  return (
    <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Start Point</th>
        <th>End Point</th>
        <th>Distance</th>
        <th>remove</th>
      </tr>
      </thead>
      <tbody>
      {
        props.routes.map(route => <RouteTableRow routes={route} key={route.id}/>)
      }
      </tbody>
    </table>
  )
}