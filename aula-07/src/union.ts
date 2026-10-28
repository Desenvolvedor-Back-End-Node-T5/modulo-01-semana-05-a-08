function exibirCodigo(codigo: string | number): void {
  console.log(`Código: ${codigo}`);
}

exibirCodigo(123);
exibirCodigo("PROD-123");

// Exemplo 12

function formatarIdentificador(valor: string | number): void {
    if(typeof valor === "string"){
        valor = valor.toUpperCase();
    } else {
        valor = valor * 10;
    }

    console.log(valor);
}

formatarIdentificador(10);
formatarIdentificador("olá, meu nome é João Pedro!");