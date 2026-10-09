// Criar uma classe

// class Aluno {
//   nome;
//   idade;
//   curso;
// }

// Criar objetos aluno com base na classe

// const aluno1 = new Aluno();
// const aluno2 = new Aluno();

// aluno1.nome = "João";
// aluno1.idade = 25;
// aluno1.curso = "ADS";

// aluno2.nome = "Maria";
// aluno2.idade = 45;
// aluno2.curso = "Gastronomia";


// console.log(aluno1);
// console.log(aluno2);

// Criando objetos com métodos construtores

// class Aluno {
//     constructor(nome, idade, curso) {
//         this.nome = nome;
//         this.idade = idade;
//         this.curso = curso;
//     }
// }

// const aluno1 = new Aluno("João", 25, "ADS");
// const aluno2 = new Aluno("Maria", 45, "Educação Física");
// const aluno3 = new Aluno("Fábio Jr", 52, "Música");

// console.log(aluno1);
// console.log(aluno2);
// console.log(aluno3);

// Métodos

class Aluno {
    constructor(nome, idade, curso, nota1, nota2) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    apresentar() {
        console.log(`Olá! Sou ${this.nome}.`);
        console.log(`Curso: ${this.curso}`);
    }

    mostrarIdade() {
      console.log(`Eu tenho ${this.idade} anos.`)
    }

    calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }
}

const aluno4 = new Aluno("José", 19, "Engenharia de Software", 10, 8);
const aluno5 = new Aluno("Josefa", 20, "Física", 6, 7);

aluno4.apresentar();
aluno5.apresentar();
aluno5.mostrarIdade();
aluno4.mostrarIdade();

console.log(aluno4.calcularMedia());
console.log(aluno5.calcularMedia());