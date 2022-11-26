import pessoa from "../tipagens/TPessoa"


class Pessoa {
  nome
  sobrenome
  idade
  constructor({nome, sobrenome, idade}: pessoa){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
  }  

  NomeCompleto(){
    return `${this.nome} ${this.sobrenome}`
  }
  AtualizarIdade(idade){
    this.idade = idade
    return this
  }
}

const pessoaC = new Pessoa({nome: "Daniel", sobrenome: "Xavier",idade: 20})

console.log(pessoaC);