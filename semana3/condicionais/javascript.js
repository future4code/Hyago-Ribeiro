//EXERCÍCIO 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

/*
O código reserva em uma variável o número inserido pelo usuário. Depois converte a string recebida nessa variável para Number, posteriosmente utiliza do If Else para verificar se a sobra da divisão da variável numero é igual a 0. Se for igual a zero, ele imprime no console.log "passou no teste", informando que o número é par. Caso contrário ele imprime no console.log do else "Não passou no teste", informando que o número é impar.
*/ 

//EXERCÍCIO 2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* 
a.O código acima serve para gerar de forma automatizada uma espécie de "laço de repetição" do if, com isso é possível facilitar a comparação com o "case", diminuindo a quantidade de código para realizar essa atividade. 
b.O preço da fruta Maçã é R$2.25.
c.Pagaria o valor de R$ 24.25
d.O preço da fruta pêra é R$ 5.5
  O preço da fruta pêra é R$ 5
*/

//EXERCÍCIO 3
// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)

/*
O erro ocasionado se deve ao motivo de que o if pai não pode utilizar das variáveis do if filho.
Para que desse certo, seria preciso colocar o console.log dentro do if filho.
*/

//EXERCÍCIO 4
// let numero1 = prompt('Digite um número')
// const valor1 = Number(numero1)
// let numero2 = prompt('Digite outro número')
// const valor2 = Number(numero2)
// let numero3 = prompt('Digite mais um número')
// const valor3 = Number(numero3)

// if(valor1 > valor2 && valor2 > valor3){
//   console.log(valor1, valor2, valor3)
// } else if(valor2 > valor1 && valor1 > valor3){
//   console.log(valor2, valor1, valor3)
// } else if(valor3 > valor1 && valor1 > valor2){
//   console.log(valor3, valor1, valor2)
// } else if(valor3 > valor2 && valor2 > valor1){
//   console.log(valor3, valor2, valor1)
// } else if(valor1 > valor3 && valor3 > valor2){
//   console.log(valor1, valor3, valor1)
// } else if(valor3 == valor2 && valor2 == valor3 && valor3 == valor1){
//   alert('Digite outros números')
//   console.log('Digite outros números')
// }

//a.Deu erro ao colocar igual, pois não uso o operacional >= para trabalhar com valores iguais.

//b.Deu erro ao colocar igual, pois não uso o operacional >= para trabalhar com valores iguais.


