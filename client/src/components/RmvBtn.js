import React, {useState} from "react";
import axios from "axios";


export const RmvBtn= (props) => {
  //const [id, setId] = useState('');

  const removeRoute = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3001/route/?id=${props.routes.id}`
      )
      .then((res) => {

        console.log(res.data);

      })
  }
  return (
    <button onChange={removeRoute}>remove</button>
  )

}