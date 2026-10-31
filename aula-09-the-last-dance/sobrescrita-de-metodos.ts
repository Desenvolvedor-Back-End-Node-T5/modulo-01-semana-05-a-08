class Veiculo {
  modelo: string;

  constructor(modelo: string) {
    this.modelo = modelo;
  }

  buzinar(): void {
    console.log("Buzina genérica");
  }
}

class Carro extends Veiculo {
  override buzinar(): void {
    console.log("BEEP BEEP!");
  }
}

class Moto extends Veiculo {
  override buzinar(): void {
    console.log("BI BI!");
  }
}

const meuCarro = new Carro("Argo");
const minhaMoto = new Moto("CB 300");

meuCarro.buzinar();
minhaMoto.buzinar();

