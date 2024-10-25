import * as module from "./modules.js"
export {divAparecerPokemon, opcaoQuantidadePokemon, regiaoEscolhida}

let opcaoQuantidadePokemon = document.querySelector("#opcaoQuantidadePokemon")

let botaoEscolherPokemon = document.querySelector("#botaoEscolherPokemon")

let divAparecerPokemon = document.querySelector("#divAparecerPokemon")

let botaoLimparPokemon = document.querySelector("#botaoLimparPokemon")

let regiaoEscolhida = document.querySelector("#regiaoEscolhida")

botaoEscolherPokemon.addEventListener('click', module.aparecerPokemon)

botaoLimparPokemon.addEventListener('click', module.limparPokemon)