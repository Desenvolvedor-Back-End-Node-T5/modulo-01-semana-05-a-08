"use strict";
class Veiculo {
    marca;
    modelo;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
class Carro extends Veiculo {
    portas;
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }
}
const meuCarro = new Carro("Fiat", "Argo", 6);
console.log("Meu carro é da marca:");
console.log(meuCarro.marca);
console.log("Meu carro é modelo:");
console.log(meuCarro.modelo);
console.log("Meu carro tem esse número de portas:");
console.log(meuCarro.portas);
