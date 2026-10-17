// Produtos mockados

import type { Produto } from "./types";

export const produtos: Produto[] = [
  {
    codigo: 1,
    nome: "Teclado",
    preco: 120,
    quantidade: 10,
    categoria: "eletronicos"
  },

  {
    codigo: 2,
    nome: "Camiseta",
    preco: 50,
    quantidade: 3,
    categoria: "vestuario"
  },

  {
    codigo: 3,
    nome: "Arroz 5kg",
    preco: 28,
    quantidade: 20,
    categoria: "alimentos"
  },
  {
    codigo: 4,
    nome: "Arroz 10kg",
    preco: 38,
    quantidade: 40,
    categoria: "alimentos"
  }
];