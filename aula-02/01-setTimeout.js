// Exemplo de Código Síncrono

console.log("Início");

console.log('Processando...');

console.log('Fim');

// Exemplo de um código assíncrono

console.log("Início");

setTimeout(() => {
  console.log("Terminou!");
}, 2000);


console.log("Fim");

// Explicação sobre o setTimeout
// Executa alguma coisa depois de um tempo qualquer

setTimeout(() => {
  console.log("Oi, meu nome é João Pedro!");
}, 10000);


// Use a função setTimeout para imprimir um contador de 1 a 3
console.log("0");

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000)
  }, 1000)
}, 1000)