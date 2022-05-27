/*
 * App.js
 */

import React from "react";
import Tabela from "./Tabela";
import Tabela2 from "./Tabela2";
import Tabela3 from "./Tabela3";


//componente REACT
class App extends React.Component{
  render(){

    //criar uma lista de alunos
        //props (propriedades)
        //são invariáveis
        const alunos=[
          {
            nome:"Rui",
            apelido:"Marques",
          },
          {
            nome:"Teresa",
            apelido:"Gomes",
          },
          {
            nome:"José",
            apelido:"Marques",
          },
          {
            nome:"Irene",
            apelido:"Oliveira",
          },
        ]

    return(
      <div  className="container">
         <h1>Primeira Lista de Alunos</h1>
         <Tabela />
         <br/><br/><br/>
         <h1>Segunda Lista de Alunos</h1>
         <Tabela2 />
         <br/><br/><br/>
         <h1>Terceira Lista de Alunos</h1>
         {/* dadosAlunos é um parâmetro de exportação,
             usado para entregar o array coms os dados dos alunos
             ao componente Tabela3 */}
         <Tabela3 dadosAlunosIN={alunos}/>
      </div>
    )
  }
}


export default App;
