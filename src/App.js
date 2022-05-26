/*
 * App.js
 */

import React from "react";
import Tabela from "./Tabela";


//componente REACT
class App extends React.Component{
  render(){
    return(
      <div  className="container">
         <h1>Primeira Lista de Alunos</h1>
         <Tabela />
      </div>
    )
  }
}




export default App;
