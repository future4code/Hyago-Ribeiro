/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


const max_rodadas = 2
const venceu = 21
console.log("Bem vindo ao jogo de Blackjack!")
let pergunta = confirm("Quer iniciar uma nova partida?")
let computador = []
let usuario = []
let continuar = true
let total1 = 0
let total2 = 0

 if(pergunta === true){
    //usuário

         for(let i = 0; i < max_rodadas; i++){
             
            if(total1 <= venceu){

               computador.push(comprarCarta())

               usuario.push(comprarCarta())

               total1 = total1 + computador[i].valor

               total2 = total2 + usuario[i].valor
               
               console.log(computador[i].texto)
               console.log(usuario[i].texto)
               console.log(total1)
               console.log(total2)
              }

         }
         
         
         // computador.push(comprarCarta())
         // total1 += computador
         // console.log(total1)
      




 }

//  console.log("Bem vindo ao jogo de Blackjack!")
//  let pergunta = confirm("Quer iniciar uma nova partida?")
 
//  //usuário
//  const carta = comprarCarta()
//  const carta2 = comprarCarta()

//   //computador
//   const carta3 = comprarCarta()
//   const carta4 = comprarCarta()

//   while(carta === "A" && carta2 === "A" || carta3 === "A" && carta4 === "A"){
//      //usuário
//          const carta = comprarCarta()
//          const carta2 = comprarCarta()

//          //computador
//          const carta3 = comprarCarta()
//          const carta4 = comprarCarta()
//          console.log("não podem ser iguais")
//   }



//   console.log(carta.texto)
//   console.log(carta2.texto)