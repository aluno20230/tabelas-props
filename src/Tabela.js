/*
 * Tabela.js
 */

import React, {Component} from "react";

class Tabela extends Component{
    render(){
        return(
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
        )
    }
}

export default Tabela