import * as module from "./modules.js" 

let escolherPokemon = document.querySelector("#escolherPokemon")

let botaoEscolherPokemon = document.querySelector("#botaoEscolherPokemon")

let divAparecerPokemon = document.querySelector("#divAparecerPokemon")

botaoEscolherPokemon.addEventListener('click', aparecerPokemon)

async function aparecerPokemon() {

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${escolherPokemon.value}/`)

    if(resposta.status == 404){
        console.log("error")
        return 0
    }

    const dados = await resposta.json()

    console.log(dados)

    let divPokemonEspecifico = document.createElement('div')

    divPokemonEspecifico.classList.add("divPokemonEspecifico")

    let imagemPokemon = module.adicionarImagem(dados.sprites.front_default)

    divPokemonEspecifico.append(imagemPokemon)

    divAparecerPokemon.appendChild(divPokemonEspecifico)

}