
let arrayDados = []

function adicionarDados() {

    let meuTitulo = document.getElementById("titulo")
    let meuAutor = document.getElementById("autor")
    let meuTexto = document.getElementById("texto")

    titulo = meuTitulo.value
    auto = meuAutor.value
    texto = meuTexto.value


    const infosPost = {

        titulo: titulo,
        autor: auto,
        conteudo: texto


    };

    arrayDados.push(infosPost)

    criarPost()

    postarImagem()

    criarEspaço()

    meuTitulo.value = ""
    meuAutor.value = ""
    meuTexto.value = ""
}

function criarPost(){

    let digitarPost = document.getElementById("local-post")
    digitarPost.innerHTML += `<h1 class="titulo-post">${arrayDados[arrayDados.length -1].titulo}</h1> \n <h4 class="autor-post">${arrayDados[arrayDados.length -1].autor}</h4> \n <p class="texto-post">${arrayDados[arrayDados.length -1].conteudo}</p>`

}

function postarImagem(evento){

    let minhaImagem = document.getElementById("imagem")
    let linkImagem = minhaImagem.value
    
    if ((linkImagem.includes(".jpeg")) || (linkImagem.includes(".jpg")) || linkImagem.includes(".png")) {

        let digitarPost = document.getElementById("local-post")
        digitarPost.innerHTML += `<div class="foto"><img src="${linkImagem}">`

    } else if(linkImagem === ""){

    }
    
    else{
        alert("O campo imagem não foi preenchido corretamente")
    }


    minhaImagem.value = ""

}


function criarEspaço() {

    let digitarPost = document.getElementById("local-post")
        digitarPost.innerHTML += `<div class="borda"></div>`

}