export type Categoria = "eletronicos" | "alimentos" | "vestuario";

export type Produto = {
  codigo: number;
  nome: string;
  preco: number;
  quantidade: number;
  categoria: Categoria;
}