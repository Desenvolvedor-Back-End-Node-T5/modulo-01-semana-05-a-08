function calcularTotal(preco: number, quantidade: number): number {
  return preco * quantidade;
}

const total = calcularTotal(75, 3);

console.log(total);


// Exemplo 1

function calcularDesconto(preco: number, desconto: number): number {
  return preco - desconto;
}

console.log(calcularDesconto(250, 100));


// Funções anônimas

const somar = function (a: number, b: number): number {
  return a + b;
};

console.log(somar(10, 5)); // 15


// Arrow function

const multiplicar = (a: number, b: number): number => {
  return a * b;
};

console.log(multiplicar(4, 3)); // 12

// Exemplo 3

const dobrar = (a: number): number => {
    return a * 2; 
}

console.log(dobrar(5));
console.log(dobrar(10));
console.log(dobrar(25));

// Exemplo 4

const precos: number[] = [20, 75, 40, 120, 50, 100, 200, 250, 40, 2, 2.5];

const ehMaiorQueCinquenta = (preco: number): boolean => {
  return preco > 50;
}

const numerosMaioresQueCinquenta = precos.filter(ehMaiorQueCinquenta);
console.log(numerosMaioresQueCinquenta);