
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

    meuTitulo.value = ""
    meuAutor.value = ""
    meuTexto.value = ""
}

function criarPost(){

    let digitarPost = document.getElementById("local-post")
    digitarPost.innerHTML += `<h1>${arrayDados[arrayDados.length -1].titulo}</h1> \n <h4>${arrayDados[arrayDados.length -1].autor}</h4> \n <p>${arrayDados[arrayDados.length -1].conteudo}</p>`

}

console.log(arrayDados)