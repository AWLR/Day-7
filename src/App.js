import React, { useState } from 'react'
import carData from './data'
import './App.css'

function App() {
 const [users, setpress] = useState(carData);

  // ()=> to pass the initial value
  //1st var is responsible to hold all the data
  //2nd var is responsible to manipulate or change the data
  return (
    <>
      {/* <h1>You click this button {press} times</h1>
      <button onClick={()=> setpress(press +1)}>Click me!</button> */}
      {/* <table>
        <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Color</th>
        </tr>
        {
          users.map((used)=>(
            <tr>
              <td>{used.id}</td>
              <td>{used.name}</td>
              <td>{used.email}</td>
              <td>{used.city}</td>
            </tr>
          ))

        }
      </table> */}
      <table>
        <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Color</th>
        </tr>
        {
          users.map((used)=>
          <tr>
                <td>{used.id}</td>
              <td>{used.brand}</td>
              <td>{used.model}</td>
              <td>{used.color}</td>
          </tr>
       ) }
      </table>

    </>
  )
}

export default App