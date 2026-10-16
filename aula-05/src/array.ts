// Exercício 02

let notas: number[] = [6, 8, 9, 10.5];

console.log(notas.length);

// Exercício 03

const produtos: {nome: string, preco: number}[] = [
  {nome: "Garrafa", preco: 100},
  {nome: "Notebook", preco: 3500}
];

// console.log(produtos);

produtos.forEach((produto) => {
  console.log('O nome do produto é ' + produto.nome);
})