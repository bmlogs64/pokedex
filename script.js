import * as module from "./modules.js"
export {divAparecerPokemon, escolherPokemon}

let escolherPokemon = document.querySelector("#escolherPokemon")

let botaoEscolherPokemon = document.querySelector("#botaoEscolherPokemon")

let divAparecerPokemon = document.querySelector("#divAparecerPokemon")

let botaoLimparPokemon = document.querySelector("#botaoLimparPokemon")

botaoEscolherPokemon.addEventListener('click', module.aparecerPokemon)

botaoLimparPokemon.addEventListener('click', module.limparPokemon)