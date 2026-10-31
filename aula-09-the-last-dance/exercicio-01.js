"use strict";
// Jair
class Veiculo {
    marca;
    modelo;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        console.log(`O veículo ${this.marca} ${this.modelo} está ligado.`);
    }
}
class Carro extends Veiculo {
    portas;
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }
}
class CarroEletrico extends Carro {
    autonomia; // km
    constructor(marca, modelo, portas, autonomia) {
        super(marca, modelo, portas);
        this.autonomia = autonomia;
    }
    carregarBateria() {
        console.log("A bateria está carregada.");
    }
    static converterKmParaMetros(quilometros) {
        return quilometros * 1000;
    }
}
const carroEletrico = new CarroEletrico("Tesla", "Model 3", 4, 500);
carroEletrico.ligar();
carroEletrico.carregarBateria();
console.log(`Marca: ${carroEletrico.marca}`);
console.log(`Modelo: ${carroEletrico.modelo}`);
console.log(`Portas: ${carroEletrico.portas}`);
console.log(`Autonomia: ${carroEletrico.autonomia} km`);
const autonomiaEmMetros = CarroEletrico.converterKmParaMetros(carroEletrico.autonomia);
console.log(`Autonomia em metros: ${autonomiaEmMetros} m`);
