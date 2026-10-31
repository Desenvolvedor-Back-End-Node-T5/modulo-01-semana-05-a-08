"use strict";
async function buscarPokemon(identificador) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${identificador}`);
    if (!resposta.ok) {
        // console.log('Pokémon não encontrado.')
        throw new Error("Pokémon não encontrado.");
    }
    const pokemon = await resposta.json();
    return pokemon;
}
async function executar() {
    try {
        const pokemon = await buscarPokemon("pikachu123");
        console.log("Nome:", pokemon.name);
        console.log("ID:", pokemon.id);
        console.log("Altura:", pokemon.height);
        console.log("Peso:", pokemon.weight);
    }
    catch (erro) {
        if (erro instanceof Error) {
            console.error("Erro:", erro.message);
        }
        else {
            console.error("Ocorreu um erro desconhecido.");
        }
    }
}
executar();
