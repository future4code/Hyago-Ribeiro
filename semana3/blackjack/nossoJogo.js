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

console.log("Bem vindo ao jogo de Blackjack!")
let pergunta = confirm("Quer iniciar uma nova partida?")


 if(pergunta === true){
    //usuário
   const carta = comprarCarta()
   const carta2 = comprarCarta()

   soma1 = carta.valor + carta2.valor

   //Computador
   const carta3 = comprarCarta()
   const carta4 = comprarCarta()

   soma2 = carta3.valor + carta4.valor

   if(soma1 <= 21 && soma2 <= 21){
      console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto} - pontuação ${soma1}`)
      console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação ${soma2}`)
      
      if(soma1 > soma2){
         console.log("Usuário ganhou!")

      } else {
         console.log("Computador ganhou!")
      }

   }else if(soma1 > 21){
      console.log("Usuário passou de 21 pontos, perdeu.")
   }else {
      console.log("Computador passou de 21 pontos, perdeu")
   }


 }else{
    console.log("O jogo acabou")
 }