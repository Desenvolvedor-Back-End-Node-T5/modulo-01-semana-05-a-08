// Criando classe Carro

class Carro {
  constructor(marca, modelo, ano, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.preco = preco;
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2014, 150000);
const carro2 = new Carro("Fiat", "Palio", 2006, 18000);

console.log(carro1.ano);
console.log(carro1.preco);
console.log('---------')
console.log(carro2.ano);
console.log(carro2.preco);
