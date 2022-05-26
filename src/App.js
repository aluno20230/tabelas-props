/*
 * App.js
 */

import React from "react";


//componente REACT
class App extends React.Component{
  render(){
    return(
      <div>
        <h1 className="container">Primeira Lista de Alunos</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rui</td>
              <td>Marques</td>
            </tr>
            <tr>
              <td>Teresa</td>
              <td>Gomes</td>
            </tr>
            <tr>
              <td>José</td>
              <td>Marques</td>
            </tr>
            <tr>
              <td>Irene</td>
              <td>Oliveira</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}




export default App;
