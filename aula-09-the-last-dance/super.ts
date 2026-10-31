class Veiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

class Carro extends Veiculo {
  portas: number;

  constructor(marca: string, modelo: string, portas: number) {
    super(marca, modelo);
    this.portas = portas;
  }
}

const meuCarro = new Carro("Fiat", "Argo", 6);

console.log("Meu carro é da marca:")
console.log(meuCarro.marca);

console.log("Meu carro é modelo:")
console.log(meuCarro.modelo);

console.log("Meu carro tem esse número de portas:")
console.log(meuCarro.portas);
