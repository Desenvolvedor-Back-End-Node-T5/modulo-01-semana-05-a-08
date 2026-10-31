class Veiculo {
  protected velocidade = 0;

  acelerar(): void {
    this.velocidade += 10;
  }
}

class Carro extends Veiculo {
  mostrarVelocidade(): void {
    console.log(this.velocidade);
  }
}

const meuCarro = new Carro();
// meuCarro.velocidade = 20