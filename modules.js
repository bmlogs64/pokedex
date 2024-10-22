export {adicionarImagem, limparPokemon, aparecerPokemon}

import { divAparecerPokemon,escolherPokemon } from "./script.js";

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

function limparPokemon(){

    divAparecerPokemon.innerHTML = ""

}

async function aparecerPokemon() {

    for(let i = 1; i <= escolherPokemon.value; i++){

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)

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

        divPokemonEspecifico.append(imagemPokemon,nomePokemon)

        divAparecerPokemon.appendChild(divPokemonEspecifico)

    }

}