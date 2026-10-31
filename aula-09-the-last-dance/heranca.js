"use strict";
class Veiculo {
    marca;
    modelo;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        console.log(`${this.modelo} ligado!`);
    }
}
class Carro extends Veiculo {
    acelerar() {
        // console.log("O carro está acelerando.");
        console.log(`O ${this.modelo} está acelerando`);
    }
}
class Moto extends Veiculo {
    empinar() {
        // console.log("A moto está empinando.");
        console.log(`${this.modelo} está empinando.`);
    }
}
const meuCarro = new Carro("Fiat", "Palio");
const minhaMoto = new Moto("Honda", "CB 500");
meuCarro.ligar();
meuCarro.acelerar();
minhaMoto.ligar();
minhaMoto.empinar();
