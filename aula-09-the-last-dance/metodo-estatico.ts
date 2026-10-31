class Conversor {
  static kmParaMetros(km: number): number {
    return km * 1000;
  }
}

console.log(Conversor.kmParaMetros(10)); // 5000 