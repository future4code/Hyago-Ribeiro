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


const rodadaInicial = 2
const venceu = 21
console.log("Bem vindo ao jogo de Blackjack!")
let pergunta = confirm("Quer iniciar uma nova partida?")
let computador = [compararCarta(), comprarCarta()]
let usuario = [compararCarta(), comprarCarta()]
let continuar = true
let total1 = 0
let total2 = 0

 if(pergunta === true){
    //usuário
      //usar while no nossoJogo
      //focar na funcionalidade para que o usuário possa jogar o quanto desejar
      //o jogo só acaba quando o usuário deseja sair do jogo
      //

         while(pergunta){
             
            if(total1 <= venceu){

               computador.push(comprarCarta())

               usuario.push(comprarCarta())

               total1 = total1 + computador[i].valor

               total2 = total2 + usuario[i].valor
               
              }
              
         }
   
         console.log(computador[0].texto + " " + computador[1].texto)
         console.log(usuario[0].texto)
         console.log(usuario[1].texto)
         console.log(total1)
         console.log(total2)
         
         
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

//   while(carta.valor === 11 && carta2.valor === 11 || carta3.valor === 11 && carta4.valor === 11){
//      //usuário
//          carta = comprarCarta()
//          carta2 = comprarCarta()

//          //computador
//          carta3 = comprarCarta()
//          carta4 = comprarCarta()
//          console.log("não podem ser iguais")
//   }



//   console.log(carta.texto)
//   console.log(carta2.texto)