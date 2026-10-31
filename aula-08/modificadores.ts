class Carro {
  public cor: string;

  constructor(cor: string) {
    this.cor = cor;
  }
}

const carro = new Carro("Preto");
console.log(carro.cor);

carro.cor = "Branco";
console.log(carro.cor);


// Personagem

class Persona {
  public vida = 100;

  receberDano(dano: number): void {
    if (dano > 0) {
      this.vida = Math.max(0, this.vida - dano);
    }
  }

  consultarVida(): number {
    return this.vida;
  }
}

const frodo = new Persona();
console.log("Vida inicial do Frodo: ")
console.log(frodo.consultarVida());

frodo.receberDano(95);
console.log("Vida do Frodo depois do Gollum arrancar-lhe o dedo: ")
console.log(frodo.consultarVida());

frodo.receberDano(50);
console.log(frodo.consultarVida());
