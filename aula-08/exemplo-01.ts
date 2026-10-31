// Código do Bruno Bohr

class Personagem {
  public nome: string;
  public categoria: string;
  private energia: number = 0;

  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }

  ganharEnergia(): void {
    this.energia += 10;
  }

  perderEnergia(): void {
    this.energia = Math.max(0, this.energia - 10);
  }

  consultarEnergia(): number {
    return this.energia;
  }

  cantar(): void {
    this.ganharEnergia();
  }

  aproximarDoPai(): void {
    this.perderEnergia();
  }

  dancar(): number {
    this.ganharEnergia();
    return this.consultarEnergia();
  }
}

const michel = new Personagem("michel-hee-hee", "Rei do Pop");

const paiDoMichel = new Personagem("pai do michel", "Vilão e vacilão");

michel.cantar();
console.log("Cantou! Energia:", michel.consultarEnergia());

michel.aproximarDoPai();
console.log("Paichego junto! Energia:", michel.consultarEnergia());

console.log("Moonwalk! Energia:", michel.dancar());

paiDoMichel.ganharEnergia();
paiDoMichel.perderEnergia();
paiDoMichel.perderEnergia();

console.log(
  michel.nome,
  michel.categoria,
  michel.consultarEnergia()
);

console.log(
  paiDoMichel.nome,
  paiDoMichel.categoria,
  paiDoMichel.consultarEnergia()
);