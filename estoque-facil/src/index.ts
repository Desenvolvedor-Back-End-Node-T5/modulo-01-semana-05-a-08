import { listarProdutos, buscarProduto, cadastrarProduto } from "./produtos";
import { formatarMoeda } from "./utils";

console.log("=== ESTOQUE FÁCIL ===");

console.log("\nProdutos cadastrados:");
listarProdutos();

console.log("\nCadastrando um novo produto:");

const macarrao = cadastrarProduto({
    codigo: 5,
    nome: "Macarrão",
    preco: 80,
    quantidade: 8,
    categoria: "alimentos"
});

console.log(macarrao ? "Produto cadastrado!" : "Código já utilizado.");
listarProdutos();

console.log("\nConsultando produto de código 1:");

const produto = buscarProduto(1);

if (produto !== undefined) {
    console.log(produto);
}

console.log("\n=== FIM DO SISTEMA ===");