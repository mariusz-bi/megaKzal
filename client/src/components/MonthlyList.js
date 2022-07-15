import React, {useState} from "react";
import axios from "axios";

export const MonthlyList = (props) => {

  const date = new Date();
 const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [routeList, setRouteList] = useState(null);

const send = () => {
  axios
    .get(`http://localhost:3001/route/?year=${year}&month=${month}`
)
    .then((response) => {

      setRouteList((response.data).json());
      console.log(routeList);

    })
};
  return (
<>
  <h1>Lista</h1>
  <form>
    <label htmlFor="oneMonth">Month:</label>
    <select id="oneMonth" onChange={e => setMonth(e.target.value)}>
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>
    <label htmlFor="oneYear">Year:</label>
    <select id="oneYear" name="year" onChange={e => setYear(e.target.value)}>
      <option>2022</option>
      <option>2021</option>
    </select>
    <button onClick={send}>Show routes</button>
  </form>

</>
  )
};