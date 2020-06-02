/*exercício 1*/
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
/*o resultado é false, porque não são todos true.*/

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
/*False, pois dentro dos parenteses da true, mas com o && de fora da false, porque é o boll3 negado!*/

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
/*true porque pega o ultimo resultado e nega, deixando positivo. E dentor dos parenteses dá positivo, já que são dois true*/

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
/*False, !bool1 || bool2 resulta em false. depois o resultado positivo com && e o resultados dos parentes, gera um false. Por ultimo ao somado com !bool3 mantém o false.*/

console.log("e. ", typeof resultado)
/*boolean*/


/*exercício 2*/
let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

/*
a. O que é `array` e como se declara em `JS`?
É como se fosse uma "caixa" para armazenagem de informações e dados. Podemos armadezar strings, numeros, booleanos. Declaramos no js com o uso de []

b. Qual o index inicial de um `array`?
Utilizamos [i] para acessar o index de um array, sendo que ele começa pela posição 0.

c. Como se determinar o tamanho do `array`?
Utilizamos .length para determinar o tamanho de um array. Como por exemplo: array.length

d. Indique todas as mensagens impressas no console.
I. undefined
II. null
III. 11
IV. 3 e 4
V. 19 e 9
VI. 3
VII. 1
*/


/* exercícios de temperatura*/
let f = 77
let kelvin = (f - 32)*5/9 + 273.15
console.log('77°F --> ', kelvin, '°K')

let c = 80
let fahrenheit = (c)*9/5 + 32
console.log('80°C --> ', fahrenheit, '°F')

let temp = prompt("Digite em Celsio")
let fr = (temp)*9/5 + 32
console.log(fr)
let k = (fr - 32)*5/9 + 273.15
console.log(k)

/* programa das 5 perguntas */
let nome = prompt("Qual seu nome?")
console.log('Resposta: ', nome)

let idade = prompt("Qual sua idade?")
console.log('Resposta: ', idade)

let anime = prompt("Qual seu anime favorito?")
console.log('Resposta: ', anime)

let comida = prompt("Qual sua comida favorita?")
console.log('Resposta: ', comida)

let jogo = prompt("Qual seu jogo favorito?")
console.log('Resposta: ', jogo)

/*programa energia*/

let qw = prompt('Quantos quilowatt-hora você gastou?')
let porcentagem = prompt('Quantos porcento você tem de desconto?')

let valorDinheiro = (qw)*1/20
let porcentagemDesconto = porcentagem/100
let valorDesconto = valorDinheiro*porcentagemDesconto
let valorDinheiroFinal = valorDinheiro-valorDesconto
console.log('Valor a ser pago R$', valorDinheiroFinal)