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


    console.log(resposta)

    const dados = await resposta.json()

    console.log(dados)

    let imagemPokemon = document.createElement("img")

    imagemPokemon.src = dados.sprites.front_default

    divAparecerPokemon.append(imagemPokemon)

    

}
