// //EXERCÍCIO 1
// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)

// //O código está somando todos os números de 0 até 14. Ou seja: 0+1+2+3+4+5+6... e vai imprimir no console a soma de todos os números até 14.


// //EXERCÍCIO 2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
// for(const item of lista) {
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

// //a.O comando push vai adicionar ao array novaLista os números do array lista que a sobra da divisão por 5 seja igual a 0.
// //b.10, 15, 25, 30
// //c.Acaso trocasse a variável por 3 os números do console seriam: 12, 15, 18, 21, 27, 30
// //  Já se fosse por 4, seria: 12


// //EXERCÍCIO 3
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let maior = array[0]
// let menor = array[0]

// //a.

// for(let num of array){
//     if(num > maior){
//         maior = num
//     }
// }

// for(let num of array){
//     if(num < menor){
//         menor = num
//     }
// }

// console.log(`O maior número é ${maior} e o menor é ${menor}`)


// //b.
// const listDiv = []
// const numeroDiv = 10

// for(let num of array){
    
//     divNum = num / numeroDiv
//     listDiv.push(divNum)
// }

// console.log(listDiv)



// //c.

// for(let i = 0; i < 12; i++){
//     elemento = array[i]
//     console.log(`O elemento do índex ${i} é ${elemento}`)
// }

//DESAFIO 2

let numeroEscolhido = prompt("Escolha um número de 1 - 100")
console.log("Vamos jogar!")
let bananinha = true

while(bananinha){
    let escolhaUmNumero = prompt("Chute um número")

    if(escolhaUmNumero === numeroEscolhido){
        console.log("o número digitado foi: " + escolhaUmNumero)
        console.log("Acertou!")
        bananinha = false
    }else{
        console.log("o número digitado foi: " + escolhaUmNumero)
        console.log("Errrrrrou!")
    }
}