type Pessoa = {
  nome: string;
  idade: number;
};

type Funcionario = {
  cargo: string;
  salario: number;
};

type FuncionarioCompleto = Pessoa & Funcionario;

const funcionario1: FuncionarioCompleto = {
  nome: "Ana",
  idade: 28,
  cargo: "Desenvolvedora",
  salario: 4500
};

console.log(funcionario1);


// Exemplo 13 (fazer)