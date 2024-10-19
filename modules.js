export {adicionarImagem}

function adicionarImagem(urlImagemPokemon) {

    let imagemPokemon = document.createElement("img")

    imagemPokemon.setAttribute("src", urlImagemPokemon)
    
    return imagemPokemon

}