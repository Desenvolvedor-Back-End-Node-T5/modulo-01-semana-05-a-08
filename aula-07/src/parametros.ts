// Parâmetro opcional

function apresentarProduto(nome: string, categoria?: string): string {
  if (categoria) {
    return `${nome} - ${categoria}`;
  } else {
    return nome;
  }
}

console.log(apresentarProduto("Teclado", "Periféricos"));
console.log(apresentarProduto("Mouse"));


// Parâmetro com valor padrão

function calcularValor(preco: number, quantidade: number = 10): number {
  return preco * quantidade;
}

console.log(calcularValor(50));    // 50
console.log(calcularValor(50, 3)); // 150


// Exemplo 6


function calcularCompra(preco: number, quantidade: number = 1, cupom?: string): number {
  if(quantidade <= 0) {
    return 0;
  }

  let total = preco * quantidade;

  if(cupom === "SCTEC10") {
    total = total * 0.9;
  }

  return total;
}

console.log(calcularCompra(100)); // 100
console.log(calcularCompra(100, 2, "SCTEC10")) // 180
console.log(calcularCompra(100, 0)); // 0