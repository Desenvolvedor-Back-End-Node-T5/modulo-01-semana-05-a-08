// Para uma senha ser válida, ela precisa ter pelo menos 8 caracteres.
// Forma tradicional
let senha = '12345678';

if(senha.length >= 8) {
  console.log('A senha é válida');
} else {
  console.log('A senha não é válida');
}


// Função para validar uma senha
function validarSenha(senha) {
  if(senha.length >= 8) {
    console.log('sua senha é muito segura (sqn)');
  } else {
    console.log('sua senha não vai dar certo');
  }
}

let novaSenha = '123';

validarSenha(novaSenha);

validarSenha('123456');

validarSenha('86868686868868686868');


// Exemplo de uma função que soma dois números

function somarDoisNumeros(numero1, numero2) {
  console.log(numero1 + numero2);
}

function subtrairDoisNumeros(numero1, numero2) {
  console.log(numero1 - numero2);
}

somarDoisNumeros(20, 40);
subtrairDoisNumeros(100, 20);