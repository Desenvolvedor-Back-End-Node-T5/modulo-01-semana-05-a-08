// Jair

class Veiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  ligar(): void {
    console.log(`O veículo ${this.marca} ${this.modelo} está ligado.`);
  }
}

class Carro extends Veiculo {
  portas: number;

  constructor(marca: string, modelo: string, portas: number) {
    super(marca, modelo);
    this.portas = portas;
  }
}

class CarroEletrico extends Carro {
  autonomia: number; // km

  constructor(marca: string, modelo: string, portas: number, autonomia: number) {
    super(marca, modelo, portas);
    this.autonomia = autonomia;
  }

  carregarBateria(): void {
    console.log("A bateria está carregada.");
  }

  static converterKmParaMetros(quilometros: number): number {
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