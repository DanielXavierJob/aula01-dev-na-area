
//SOLID
/**
 * This function return object
 * @returns object
 */
function retornaObjeto(){
  let objeto = {}
  return objeto
}
console.log(retornaObjeto())

//Design Patterns

// Função Fábrica
// Funções Fábricas, fazem de uma forma genérica, um objeto relacional
const retornaObjetoPessoa = (nome, sobrenome, idade) => {
  const NomeCompleto = () => {
    return `${nome} ${sobrenome}`
  }
  const AtualizarIdade = (idade) => {
    pessoa.idade = idade;
    return pessoa;
  }

  let pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    NomeCompleto: NomeCompleto,
    idade: idade,
    AtualizarIdade: AtualizarIdade,
  }

 
  return pessoa;
}

const pessoaA = retornaObjetoPessoa("Daniel", "Xavier",20)
console.log(pessoaA.AtualizarIdade(22))
// -> {}
