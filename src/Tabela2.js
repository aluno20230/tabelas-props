/*
 * Tabela2.js
 */

import React, {Component} from "react";


function Cabecalho(){
  return(
    <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
            </tr>
          </thead>
  )
}

const Corpo =()=>{
    return(
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
    )
}

class Tabela2 extends Component{
    render(){
        return(
        <table className="table table-bordered">
          <Cabecalho />
          <Corpo />     
        </table>
        )
    }
}

export default Tabela2