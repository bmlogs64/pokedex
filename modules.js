export {limparPokemon, aparecerPokemon}

import { divAparecerPokemon,opcaoQuantidadePokemon } from "./script.js";

function adicionarImagem(urlImagemPokemon) {

    let imagemPokemon = document.createElement("img")

    imagemPokemon.setAttribute("src", urlImagemPokemon)
    
    return imagemPokemon

}

function adicionarNome(nomePokemon){

    let h1NomePokemon = document.createElement("h1")

    h1NomePokemon.classList.add("h1NomePokemon")

    h1NomePokemon.textContent = nomePokemon

    return h1NomePokemon

}

function adicionarTipos(tipo){

    let h3Tipos = document.createElement("h3")

    let primeiroTipo = tipo[0].type.name

    if (tipo.length == 1){

        h3Tipos.textContent = `${primeiraLetra_maiuscula(primeiroTipo)}`

    }else{

        let segundoTipo = tipo[1].type.name

        h3Tipos.textContent = `${primeiraLetra_maiuscula(primeiroTipo)} | ${primeiraLetra_maiuscula(segundoTipo)}`

    }

    return h3Tipos

}

function limparPokemon(){

    divAparecerPokemon.innerHTML = ""

}

async function aparecerPokemon() {

    divAparecerPokemon.innerHTML = ""

    for(let i = 1; i <= opcaoQuantidadePokemon.value; i++){

        let pokemonAleatorio = Math.floor(Math.random() * 1025) + 1

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`)

        if(resposta.status == 404){
            console.log("error")
            return 0
        }

        const dados = await resposta.json()

        console.log(dados)

        let divPokemonEspecifico = document.createElement('div')

        divPokemonEspecifico.classList.add("divPokemonEspecifico")

        let imagemPokemon = adicionarImagem(dados.sprites.front_default)
        let nomePokemon = adicionarNome(dados.name)
        let tiposPokemon = adicionarTipos(dados.types)
        let informacoesPokemon = adicionarLinkInformacoes(dados.name)

        divPokemonEspecifico.append(imagemPokemon,nomePokemon,tiposPokemon, informacoesPokemon)

        divAparecerPokemon.appendChild(divPokemonEspecifico)

    }

}

function primeiraLetra_maiuscula(string) {

    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

}

function adicionarLinkInformacoes(nomePokemon){

    let linkInformacoesPokemon = document.createElement("a")

    linkInformacoesPokemon.textContent = "Informações!"

    linkInformacoesPokemon.setAttribute("target", "_blank")

    linkInformacoesPokemon.setAttribute("href", "https://pokemondb.net/pokedex/" + nomePokemon)

    return linkInformacoesPokemon

}