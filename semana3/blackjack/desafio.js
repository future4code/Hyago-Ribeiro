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


const venceu = 21
console.log("Bem vindo ao jogo de Blackjack!")
let pergunta = confirm("Quer iniciar uma nova partida?")
let continuar = true
let total1 = 0
let total2 = 0


//while porque precisa repetir e dar novos valores acaso o usuário queira jogar novamente
 while(pergunta){
   
   //declaração iniciao de cada jogador
   let computador = [comprarCarta(), comprarCarta()]
   let usuario = [comprarCarta(), comprarCarta()]

   while(computador[0].valor === 11 && computador[1].valor === 11 || usuario[0].valor === 11 && usuario[1].valor === 11){

      computador = [comprarCarta(), comprarCarta()]
      usuario = [comprarCarta(), comprarCarta()]

   }

   //soma do usuario
   total1 =  usuario[0].valor + usuario[1].valor

//soma do computador
   total2 = computador[0].valor + computador[1].valor

   console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação ${total1}`)

   console.log(`Computador - cartas: ${computador[0].texto} - pontuação ${total2}`)

   pergunta = confirm(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto}. A carta revelada do computador é ${computador[0].texto}. \n Deseja comprar mais uma carta?`)

   batatinha = true

   //esse while é para fazer o pedir cartas novas conforme o usuário esteja insatisfeito
      while(pergunta){

         if(total1 <= venceu){
            usuario.push(comprarCarta())

            ultimoUsuario = usuario[usuario.length -1]

            total1 = total1 + ultimoUsuario.valor
          

            if(total1 >= venceu){

               alert(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto} ${usuario[usuario.length -1].texto}. Sua pontuação é ${total1}. \n As cartas do computador são ${computador[0].texto} ${computador[1].texto}. A pontuação do computador é ${total2}. \n O computador ganhou!`)

               continuar = false

            } else if (pergunta === true) {

               pergunta = confirm(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto} ${usuario[usuario.length -1].texto}. A carta revelada do computador é ${computador[0].texto}. \n Deseja comprar mais uma carta?`)

            } else if (pergunta === false){

               while(batatinha){

                  computador.push(comprarCarta())

                  ultimoComputador = usuario[usuario.length -1]

                  total2 = total2 + ultimoComputador.valor

                  if (total2 < venceu && total2 > total1){

                     alert(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto} ${usuario[usuario.length -1].texto}. Sua pontuação é ${total1}. \n As cartas do computador são ${computador[0].texto} ${computador[1].texto} ${computador[computador.length -1].texto}. A pontuação do computador é ${total2}. \n O computador ganhou!`)

                  } else if(total2 > venceu){
                     
                     alert(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto} ${usuario[usuario.length -1].texto}. Sua pontuação é ${total1}. \n As cartas do computador são ${computador[0].texto} ${computador[1].texto} ${computador[computador.length -1].texto}. A pontuação do computador é ${total2}. \n O usuario ganhou!`)
                 
                  }

               }

            }

            

         }

      }

    //usuário
      //usar while no nossoJogo
      //focar na funcionalidade para que o usuário possa jogar o quanto desejar
      //o jogo só acaba quando o usuário deseja sair do jogo
      //

         // while(pergunta){
             
         //    if(total1 <= venceu){

         //       computador.push(comprarCarta())

         //       usuario.push(comprarCarta())

         //       total1 = total1 + computador[i].valor

         //       total2 = total2 + usuario[i].valor
               
         //      }
              
         // }
   
         // console.log(computador[0].texto + " " + computador[1].texto)
         // console.log(usuario[0].texto)
         // console.log(usuario[1].texto)
         // console.log(total1)
         // console.log(total2)
         
         
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