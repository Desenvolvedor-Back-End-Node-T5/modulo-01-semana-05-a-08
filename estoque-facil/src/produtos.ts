import { produtos } from "./data";
import { Produto } from "./types";
import { formatarMoeda } from "./utils";

export function listarProdutos(): void {
  for (const produto of produtos) {
    console.log(
      `${produto.codigo} - ${produto.nome} | ` +
      `${formatarMoeda(produto.preco)} | ` +
      `Estoque: ${produto.quantidade}`
    )
  }
}

export function buscarProduto(codigo: number): Produto | undefined {
  return produtos.find(produto => produto.codigo == codigo);
}

export function cadastrarProduto(produto: Produto): boolean {
  const existente = buscarProduto(produto.codigo);

  if(existente != undefined) {
    console.log("Esse produto já existe");
    return false;
  }

  produtos.push(produto);
  console.log('Seu produto foi adicionado');
  return true;

}

// const farinha: Produto = {
//   codigo: 5,
//   nome: "Farinha",
//   preco: 5,
//   quantidade: 10,
//   categoria: "alimentos"
// }

// cadastrarProduto(farinha);
// listarProdutos();