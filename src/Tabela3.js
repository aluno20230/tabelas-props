/*
 * Tabela3.js
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

const Corpo =(dados)=>{

    //iterar todos os elementos do json e gerar as linhas da tabela
    const rows = dados.dadosRecebidosAlunosIN.map((row,index)=>{
      return(
      <tr key={index}>
        <td>{row.nome}</td>
        <td>{row.apelido}</td>
      </tr>
      )
    })

    return(
    <tbody>{rows}</tbody>
    )
}

class Tabela3 extends Component{
    render(){

        //ler os dados que são enviados para dentro da componente
        const {dadosAlunosIN}=this.props

        return(
        <table className="table table-striped">
          <Cabecalho />
          <Corpo  dadosRecebidosAlunosIN={dadosAlunosIN}/>     
        </table>
        )
    }
}

export default Tabela3