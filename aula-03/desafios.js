// Desafio 01 - Gabriel Fernando

// function calcular(num1, num2, callback){
// 	return callback(num1, num2);
// }

// function multiplicar(num1, num2){
// 	return (num1 * num2);
// }

// function dividir(num1, num2){
// 	return (num1 / num2);
// }

// console.log(calcular(5, 5, multiplicar));
// console.log(calcular(5, 2, dividir));


// Desafio 02 - Felipe Machado

// function verificarNome(nome) {
// 	return nome.length >= 3;
// }

// function validarCadastro(nome, callback) {
// 	if (!callback(nome)) {
//   	console.log("Nome inválido");
//   	return;
//   }

//   if(callback(nome)) {
//     console.log("Cadastro permitido")
//   } else {
//     console.log("Nome inválido")
//   }
  
//   console.log("Cadastro permitido");
// }

// validarCadastro("Ana", verificarNome);
// validarCadastro("Jo", verificarNome);


// Desafio 03 - Cinara Fernandes (que é mais fácil)

function validarDados(nome, email) {
	let nomeValido = nome.length >= 5;
  let emailValido = email.includes("@") && email.includes(".");
  
	return nomeValido && emailValido;
  
}

function validarCadastro(nome, email, callback) {
	if(callback(nome, email)) {
  	console.log("Cadastro permitido!");
  } else{
  	console.log("Nome ou e-mail inválido!");
  }
}

// validarCadastro("Cinara", "cinara@123.com", validarDados);
validarCadastro("Cinara", "cinara@123.com", validarDados);


// Resolução 04 - Luiz Fernando

let precos = [100, 200, 50];

function aplicarDesconto(preco) {
  return preco * 0.9;
}

function processarPrecos(precos, callback) {
  return precos.map(callback);
}

let precosComDesconto = processarPrecos(precos, aplicarDesconto);

console.log('A lista inicial é ' + precos);
console.log('A lista com descontos é ' + precosComDesconto);