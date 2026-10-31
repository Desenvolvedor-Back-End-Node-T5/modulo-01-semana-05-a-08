// class Carro {
//   marca: string;
//   modelo: string;
//   ano: number;

//   constructor(marca: string, modelo: string, ano: number) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.ano = ano;
//   }
// }

// const carro1 = new Carro("Fiat", "Palio", 2010);
// const carro2 = new Carro("Fiat", "Argo", 2023);
// console.log(carro1);
// console.log(carro2);



// class Personagem {
//   nome: string;
//   vida: number;
//   nivel: number;

//   constructor(nome: string) {
//     this.nome = nome;
//     this.vida = 100;
//     this.nivel = 1;
//   }
// }

// const personagem1 = new Personagem("Gabriel");


class Veiculo {
  velocidade: number = 0;

  acelerar(): void {
    // this.velocidade = this.velocidade + 20;
    this.velocidade += 20;
  }

  frear(): void {
    this.velocidade = Math.max(0, this.velocidade - 20);
  }
}

const veiculo1 = new Veiculo();
veiculo1.acelerar();
veiculo1.acelerar();
veiculo1.frear();
veiculo1.frear();
veiculo1.frear();


console.log(veiculo1);



// class Personagem {
//   nome: string;
//   vida: number;

//   constructor(nome: string, vida: number) {
//     this.nome = nome;
//     this.vida = vida;
//   }

//   receberDano(dano: number): void {
//     this.vida = Math.max(0, this.vida - dano);
//   }
// }

// const heroi = new Personagem("Arqueiro", 100);
// heroi.receberDano(25);
// heroi.receberDano(25);
// heroi.receberDano(25);
// heroi.receberDano(25);
// heroi.receberDano(25);
// heroi.receberDano(25);

// console.log(heroi);

