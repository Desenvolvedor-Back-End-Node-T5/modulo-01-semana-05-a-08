class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    if(valor <= 0) {
      console.log("Erro: o deposíto deve ser maior que zero.");
      return
    }

    this.saldo += valor;
    console.log(`O valor de R$ ${valor} foi depositado com sucesso`);
  }

  sacar(valor) {
    if(valor <= 0) {
      console.log('Erro: o saque deve ser maior que zero');
      return
    }

    if(valor > this.saldo) {
      console.log('Erro: saldo insuficiente');
      return
    }

    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso.`)
  }

  exibirSaldo() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo atual: R$${this.saldo}`);
  }
}

// Criando objeto a partir da classe

const conta1 = new ContaBancaria("João", 200);

// Realizando operações
// conta1.exibirSaldo();

conta1.depositar(0);

conta1.sacar(400);

conta1.exibirSaldo();