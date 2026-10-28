interface Produto {
  readonly id: number;
  nome: string;
  preco: number;
  descricao?: string;
}

const produto: Produto = {
  id: 1,
  nome: "Mouse",
  preco: 80
};

console.log(produto.nome);

produto.nome = "Mouse sem fio";

console.log(produto.nome);

// ===================

console.log(produto.id);


// Exemplo 9

interface Usuario {
  readonly id: number;
  nome: string;
  email: string;
  telefone?: number;
};

let usuario1: Usuario = {
    id: 1,
    nome: "sergio",
    email: "sergio@gmail.com",
};

console.log(usuario1);
usuario1.nome = "Giovanna";
console.log(usuario1);

// usuario1.id = 2;

