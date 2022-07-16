import React from "react";
import {RmvBtn} from "./RmvBtn";

export const RouteTableRow = (props) => {
  return (
    <tr>
      <th>{new Date(props.routes.date).toLocaleDateString()}</th>
      <th>{props.routes.startpoint}</th>
      <th>{props.routes.endpoint}</th>
      <th>{props.routes.duration}</th>
      <th><RmvBtn/></th>
    </tr>
  )

}