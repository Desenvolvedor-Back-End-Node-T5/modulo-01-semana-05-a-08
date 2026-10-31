"use strict";
class Veiculo {
    modelo;
    constructor(modelo) {
        this.modelo = modelo;
    }
    buzinar() {
        console.log("Buzina genérica");
    }
}
class Carro extends Veiculo {
    buzinar() {
        console.log("BEEP BEEP!");
    }
}
class Moto extends Veiculo {
    buzinar() {
        console.log("BI BI!");
    }
}
const meuCarro = new Carro("Argo");
const minhaMoto = new Moto("CB 300");
meuCarro.buzinar();
minhaMoto.buzinar();
