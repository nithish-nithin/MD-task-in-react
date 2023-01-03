import React, { useState } from "react";
import Records from "./Rec.json";
import "./App.css";
function App() {
  let [input, setInput] = useState("");
  let [empid, setEmpid] = useState([]);
  let [teamRecords, setTeamRecords] = useState([]);

  let EmpRecords = (e) => {
    setInput(e.target.value);
  };

  let onClick = () => {
    setEmpid(Records.filter((a) => a.id === input));
    setTeamRecords(Records.filter((a) => a.manager === input));
  };
  return (
    <div className="App">
      <center>
        <h1>Manager Details</h1>
        <div>check the details by using dropdown</div>
        <br />
        <select onChange={EmpRecords}>
          {Records.map((Records) => (
            <option>{Records.id}</option>
          ))}
        </select>
        <br />
        <button onClick={onClick}>Submit</button>

        <h2>Own Records</h2>
        <table border={"3"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Team</th>
              <th> Manager</th>
              <th>Img</th>
              <th>Short</th>
            </tr>
          </thead>
          <tbody>
            {empid.map((Records) => {
              return (
                <tr>
                  <td>{Records.id}</td>
                  <td>{Records.name}</td>
                  <td>{Records.designation}</td>
                  <td>{Records.team}</td>
                  <td>{Records.manager}</td>
                  <td>{Records.img}</td>
                  <td>{Records.short}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h2>Team Records</h2>
        <table border={"3"}>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Team</th>
            <th> Manager</th>
            <th>Img</th>
            <th>Short</th>
          </thead>
          <tbody>
            {teamRecords.map((Records) => {
              return (
                <tr>
                  <td>{Records.id}</td>
                  <td>{Records.name}</td>
                  <td>{Records.designation}</td>
                  <td>{Records.team}</td>
                  <td>{Records.manager}</td>
                  <td>{Records.img}</td>
                  <td>{Records.short}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
