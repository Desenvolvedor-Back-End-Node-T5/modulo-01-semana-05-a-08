interface Produto {
  readonly id: number;
  nome: string;
  preco: number;
}

interface ProdutoDigital extends Produto {
  tamanhoMB: number;
  formato: string;
}

const curso: ProdutoDigital = {
  id: 1,
  nome: "Curso TypeScript",
  preco: 99,
  tamanhoMB: 500,
  formato: "MP4"
};

console.log(curso.nome);
console.log(curso.tamanhoMB);


// Exemplo 11

interface Pessoa {
  nome: string;
  idade: number;
}

interface Funcionario extends Pessoa {
  cargo: string;
  salario: number;
}

const funcionario1: Funcionario = {
  nome: 'João',
  idade: 30,
  cargo: 'Desenvolvedor FullStack',
  salario: 800
}