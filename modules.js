export {limparPokemon, aparecerPokemon}

import { divAparecerPokemon,opcaoQuantidadePokemon, regiaoEscolhida } from "./script.js";

function adicionarImagem(urlImagemPokemon, nomePokemon ) {

    let imagemPokemon = document.createElement("img")

    let chanceDeShiny = Math.floor(Math.random() * 1024) + 1

    if (chanceDeShiny == 1024){

        imagemPokemon.setAttribute("src", urlImagemPokemon.front_shiny)

        let simboloShiny = document.createElement("img")

        simboloShiny.setAttribute("src", "/imagens/shiny_symbol_pokemon_swsh_bdsp_by_jormxdos_dffxr02.png")

        simboloShiny.setAttribute("class", "shiny")

        nomePokemon.appendChild(simboloShiny)        

    }else{

        imagemPokemon.setAttribute("src", urlImagemPokemon.front_default)

    }
    
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

        let dados = await pegarPokemon()

        let divPokemonEspecifico = document.createElement('div')

        divPokemonEspecifico.classList.add("divPokemonEspecifico")

        let nomePokemon = adicionarNome(dados.name)
        let imagemPokemon = adicionarImagem(dados.sprites, nomePokemon)
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

    let imagemSimboloPokedex = document.createElement("img")

    imagemSimboloPokedex.setAttribute("src", "/imagens/pokemon-3418266_640.png")

    imagemSimboloPokedex.setAttribute("id", "imagemSimboloPokedex")

    linkInformacoesPokemon.appendChild(imagemSimboloPokedex)

    linkInformacoesPokemon.setAttribute("target", "_blank")

    linkInformacoesPokemon.setAttribute("href", "https://pokemondb.net/pokedex/" + nomePokemon)

    return linkInformacoesPokemon

}

async function pegarPokemon(){

    if(regiaoEscolhida.value == "Todas"){

        let dados = await pegarPokemonEspecifico(1,1025)
    
        return dados

    }else if(regiaoEscolhida.value == "Kanto"){

        let dados = await pegarPokemonEspecifico(1,151)
    
        return dados

    }else if(regiaoEscolhida.value == "Johto"){

        let dados = await pegarPokemonEspecifico(152,251)
    
        return dados

    }else if(regiaoEscolhida.value == "Hoenn"){

        let dados = await pegarPokemonEspecifico(252,386)
    
        return dados

    }else if(regiaoEscolhida.value == "Sinnoh"){

        let dados = await pegarPokemonEspecifico(387,493)
    
        return dados

    }else if(regiaoEscolhida.value == "Unova"){

        let dados = await pegarPokemonEspecifico(494,649)
    
        return dados

    }else if(regiaoEscolhida.value == "Kalos"){

        let dados = await pegarPokemonEspecifico(650,721)
    
        return dados

    }else if(regiaoEscolhida.value == "Alola"){

        let dados = await pegarPokemonEspecifico(722,809)
    
        return dados

    }else if(regiaoEscolhida.value == "Galar"){

        let dados = await pegarPokemonEspecifico(810,905)
    
        return dados

    }else if(regiaoEscolhida.value == "Paldea"){

        let dados = await pegarPokemonEspecifico(906,1025)
    
        return dados

    }

}

async function pegarPokemonEspecifico(inicioPokedex, finalPokedex) {
    
    let pokemonAleatorio = Math.floor(Math.random() * (finalPokedex - inicioPokedex + 1)) + inicioPokedex

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`)

        if(resposta.status == 404){
            console.log("error")
            return 0
        }

        const dados = await resposta.json()

        console.log(dados)

        return dados

}