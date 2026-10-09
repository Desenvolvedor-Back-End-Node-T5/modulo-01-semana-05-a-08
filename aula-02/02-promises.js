function verificarIdade(idade) {

    return new Promise((resolve, reject) => {

        if (idade >= 18) {
            resolve("Acesso permitido");
        } else {
            reject("Acesso negado");
        }

    });
}
 
console.log(verificarIdade(29));

verificarIdade(30)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log('Fim do sistema.');
  })

// finally() executa independente do resultado da Promise ser positivo ou negativo.


// Resolução do Desafio 1 do Slide

function buscarProduto(id) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === 10) {
        resolve({
          id: 10,
          nome: "Notebook",
          preco: 3500
        })
      } else {
        reject("Produto não encontrado");
      }
    }, 2000)
  })
}

buscarProduto(10)
  .then((produto) => {
    console.log(produto);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log('fim do sistema.')
  })

// Resolução do Desafio 3 - Login

function fazerLogin(email, senha) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(email == "admin@email.com" && senha == "123456") {
        resolve("Login realizado!");
      } else {
        reject("E-mail ou senha inválidos");
      }

    }, 3000)
  })
}

// Resolvendo o desafio com .then() e .catch()

fazerLogin("admin@email.com", "123456")
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  })

// Resolvendo com async/await

async function executarLogin() {
  try {
    const mensagem = await fazerLogin("admin123@email.com", "123456");
    console.log(mensagem);
  } catch (erro) {
    console.log(erro);
  }
}

executarLogin();

// Resolução do Desafio dos filmes usando aync/await

function buscarFilme(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id === 7){
                resolve({
                    id: 8,
                    titulo: "Interestelar",
                    ano: 2014,
                    genero: "Ficção científica",
                })
            } else{
                reject("Filme não encontrado.")
            }
        }, 3000)
    })
}

async function executarBusca(){
    try {
        let resultado = await buscarFilme(7);
        console.log(resultado);
    } catch (erro){
        console.log(erro);
    }
}

executarBusca();


// Resolução do desafio da previsão do tempo usando async/await

function buscarPrevisao(cidade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (cidade === "Fortaleza") {
                resolve({
                    cidade: "Fortaleza",
                    temperatura: 48,
                    condicao: "Ensolarado"
                });

            } else if (cidade === "Itarema") {
                resolve({
                    cidade: "Itarema",
                    temperatura: 32,
                    condicao: "Parcialmente nublado"
                });

            } else {
                reject("Previsão não encontrada.");
            }

        }, 3000);
    });
}

async function exibirPrevisao() {
    try {
        const previsao = await buscarPrevisao("Porto Alegre");
        console.log(previsao);

    } catch (erro) {
        console.log(erro);
    }
}

exibirPrevisao();