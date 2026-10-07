// Exemplo de função de alta ordem - Função que recebe uma função como parâmetro

function executarOperacao(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}

function somar(num1, num2) {
    return num1 + num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

console.log(executarOperacao(10, 5, somar));
console.log(executarOperacao(10, 5, multiplicar));


// Resolução do Desafio 01 do Slide

let pedro = {
    nome: 'Pedro Paulo',
    idade: 15
};

let mariazinha = {
    nome: 'Maria de Paulo',
    idade: 59
};

function maiorDeIdade(usuario){
    return usuario.idade >= 18;
}

function verificarAcesso(usuario, regra) {
  if(regra(usuario)) {
    console.log(`${usuario.nome}: Acesso permitido.`);
  } else {
    console.log(`${usuario.nome}: Acesso negado.`);
  }
}

verificarAcesso(pedro, maiorDeIdade);
verificarAcesso(mariazinha, maiorDeIdade);



// Exemplo de função de alta ordem - Função que retorna uma função

function criarOperacao(operador) {
    if (operador === "dobrar") {
        return function(numero) {
            return numero * 2;
        };
    }

    if (operador === "triplicar") {
        return function(numero) {
            return numero * 3;
        };
    }
}

const dobrar = criarOperacao("dobrar");
const triplicar = criarOperacao("triplicar");

console.log(dobrar(10));
console.log(triplicar(30));


// Crie uma função chamada criarOperacao() que receba uma operação matemática (soma, subtração, multiplicação ou divisão) como parâmetro e retorne uma nova função responsável por realizar essa operação.
// A função deve permitir as seguintes operações:

// - "somar" → soma 10 ao número recebido.
// - "subtrair" → subtrai 10 do número recebido.
// - "multiplicar" → multiplica o número por 10.
// - "dividir" → divide o número por 10.

function criarOperacao(operacao) {
    return function(numero) {
        if (operacao === 'somar') {
            return numero + 10;
        }
        if (operacao === 'subtrair') {
            return numero - 10;
        }
        if (operacao === 'multiplicar') {
            return numero * 10;
        }
        if (operacao === 'dividir') {
            return numero / 10;
        }   
    };
}

console.log(criarOperacao('somar')(5)); // Saída: 15
console.log(criarOperacao('subtrair')(25)); // Saída: 15
console.log(criarOperacao('multiplicar')(3)); // Saída: 30

// a aula acabou aqui.