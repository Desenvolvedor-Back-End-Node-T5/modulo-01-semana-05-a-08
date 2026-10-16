type Usuario = {
    nome: string;
    idade: number;
};

let usuario1: Usuario = {
  nome: "João Pedro",
  idade: 30
}

let usuario2: Usuario = {
  nome: "Maria",
  idade: 49
}

//

type Status = "pendente" | "aprovado" | "reprovado";

let situacao: Status = "pendente";

//

type Produto = {
    nome: string;
    preco: number;
};

const produtos: Produto[] = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Cabo USB", preco: 90}
];


// Exercício 5

type Aluno = {
    nome: string;
    idade: number;
    aprovado: boolean;
};

let aluno1: Aluno = {
    nome: "Pedro",
    idade: 16,
    aprovado: false,
};

let aluno2: Aluno = {
    nome: "João",
    idade: 17,
    aprovado: true
};

// let aluno3: Aluno = {
//     nome: "João",
//     idade: "19",
//     aprovado: false
// }

// Type 'string' is not assignable to type 'number'


// Exercício 6

type StatusPedido =  "pendente" | "pago" | "enviado" | "cancelado";

let status: StatusPedido = "cancelado";
// let status2: StatusPedido = "extraviado";

// status = "cancelado";