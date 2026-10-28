interface Produto {
  id: number;
  nome: string;
  preco: number;
}

const produto1: Produto = {
  id: 1,
  nome: "Teclado",
  preco: 150
};

console.log(produto1.nome);
console.log(produto1.preco);
console.log(produto1);

// Exemplo 7

interface Aluno {
  nome: string;
  idade: number;
  matriculado: boolean;
}

const aluno1: Aluno = {
  nome: "João Pedro",
  idade: 30,
  matriculado: true
}

console.log(aluno1.nome);
console.log(aluno1.idade);