/*
 * App.js
 */

import React from "react";
import Tabela from "./Tabela";
import Tabela2 from "./Tabela2";


//componente REACT
class App extends React.Component{
  render(){
    return(
      <div  className="container">
         <h1>Primeira Lista de Alunos</h1>
         <Tabela />
         <br/><br/><br/>
         <h1>Segunda Lista de Alunos</h1>
         <Tabela2 />
      </div>
    )
  }
}




export default App;
