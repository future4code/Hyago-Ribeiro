/* Exercícios de interpretação de código
1.
No código tem uma função responsável pela conversão de valores. Precisa ser passado um parametro dentro da função, que será utilizado no decorrer dela. O valor da cotação é informado pelo usuário na execução da função. Fora dela é atribuido a uma const a chamada da função e o valor a ser convertido(100). No console log essa variável é chamada e por conter a execução da função, a mesma é executada. O resultado vai depender do valor inserito no prompt, se for 2, o resultado seja R$ 200.

2.
Uma função para calcular investimento, são passados dois parametros, o tipo e o valor. 
No inicio é declarada um let para armazenar o resultado. 
o Switch é utilizado como forma se identificar o tipo de investimento. Se o parametro passado na função for compatível com algum dos Case, o codigo será executado. 
Dentro do case, o código vai atribuir a variável valorAposInvestimento o valor do parametro * a proporção do investimento.
Se não for passado nenhuma das opções existentes no parametro, vai cair em default e exibe um alert que o tipo é incorreto.
No final da função ela retorna a variável ValorAposInvestimento com o novo valor atribuido.
Depois é declarada duas const que recebem o chamado da função investeDinheiro com dois parametros cada uma. As duas variáveis que foram declaradas, são chamas em dois console.log diferente. A primeira chamada novoMontante vai dar um retorno de 165. Já a segunda vai exibir um alert, pois não encaixa em nenhum tipo de investimento apresentado.


3.
Temos 3 arrays, o array numeros preenchido, array1 vazio e array2 vazio.
O for é utilizado para percorrer todo o array numeros, e a cada iteração ele verifica se a sobra do número analisado divido por 2 é igual a 0. Se for ele empurra esse número para o array1. Se não for, ele empurra o número para o array2.
Fora do for o codigo dá um console.log nos três arrays, para ver quantos elementos cada um tem. 
Respectivos resultados.
Quantidade total de números 14
6
8


4.
É executado um for que verifica todo o array numeros. Dentro desse for temos um código de condicionais, que verifica se o numero(que é o elemento do array) é menor que a variável numero1, se for menor, o numero1 vai receber o valor de numero.
Depois ele verifica se numero é maior que numero2, se ele for maior, então numero2 vai receber o valor de numero.
Por fim ele realiza um console.log de numero1 e numero2. Ele vai pegar o menor número do array e o maior número do array.
(obrigado por esse exercícios pessoal, me fez entender melhor o passo a passo da verificação do maior e menor número)

respectivos resultados

-10
1590

*/

// Exercícios de lógica de programação

// 1. Podemos utilizar o for, for of e forEach

arrayTest = [2, 10, 20, 1, 5]

for(num of arrayTest) {
    numero = num * 2

    console.log(numero)
}

/*

2.
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3 

a) false

b) false

c) true

d) true

e) true
*/

//3.
const quantidadeDeNumerosPares = 3

let i = 0


while(i < quantidadeDeNumerosPares) {

    console.log(i++*2)
}


//4.

function trigonometria(a, b, c) {
    if(a === b && b === c && c === a){
        console.log(`Triangulo Equilátero`)
    } else if (a !== b && b !== c && c !== a){
        console.log(`Triangulo Escaleno`)
    } else{
        console.log(`Triangulo Isósceles`)
    }


}

trigonometria(10, 11, 12)


//5.
function qualMaior (num1, num2) {

    let nume3 = 0

    if(num1 > num2) {
        console.log(`O maior é: ${num1}`)

    }else{

        console.log(`O maior é: ${nume2}`)

    }


    if(num1 % num2 === 0){
        console.log(`${num1} é divisível por ${num2}`)
    }else if(num1 % num2 !== 0){
        console.log(`${num1} não é divisível por ${num2}`)
    }

    if(num2 % num1 === 0){
        console.log(`${num2} é divisível por ${num1}`)
    }else {
        console.log(`${num2} não é divisível por ${num1}`)
    }

    if(num1 > nume3){

        num3 = num1 - num2

    }else {

        nume3 = num2 - num1

    }

    console.log(`A diferença entre eles é ${num3}`)

}

qualMaior(50, 25)

//EXERCÍCIO DE FUNÇÕES
//1.


array1 = [1, 5, 10, 2, 3, 20, 6, 30]
array2 =[]


function maiorMenor(array) {
let num = 0


    for(let i of array){

        if(i < i+1){

        }

    }

}


//2.

let alertar = function(){
   return alert("Hello Labenu")
}

const alerta = alertar()

console.log(alerta)


//EXERCÍCIOS DE OBJETOS
/* 
 1. Objetos são elementos presentes nas linguagens de programação que servem para armazenar caracteristicas e funções, com eles podemos nos aproximar de representar objetos do mundo real na programação. Criando objetos que tenham atributos, caractisticas e que executem funções, atividades.
 Os arrays são como listas que utilizamos para armazenar qualquer coisa, eles aceitam valores de string, boolean, number, podemos utilizar para armazenar objetos também. 
 Conseguimos visualizar a aplicação melhor desses elementos quando pensamos em estruturas como bancos. No qual cara cliente tem sua conta e isso é representado por um objeto, com caracteristicas como saldo e funcções como saque. No array, podemos armazenar todas essas contas, possuindo um array só de contas dos clientes que tem +50 anos. 

*/

//2.

function criaRetangulo(lado1, lado2){

    let perimetro = 2 * (lado1 + lado2)
    let area = lado1 * lado2

    return retangul = {
        primeiroLado: lado1,
        segundoLado: lado2,
        perimetroObj: perimetro,
        areaObj:area
    }

}

console.log(criaRetangulo(5, 10))

//3.

filmao = {
    titulo: 'akira',
    ano: 1982,
    diretor: 'Katsuhiro',
    personagens: ['Shotaro', 'Tetsuo', 'Kei', 'Masaru', 'Akira', 'Nezu', 'Kai', 'Coronel']

}
console.log(`Venha assistir ao filme ${filmao.titulo}, de ${filmao.ano}, dirigido por ${filmao.diretor} e estrelado por ${filmao.personagens[0]}, ${filmao.personagens[1]}, ${filmao.personagens[2]}, ${filmao.personagens[3]}, ${filmao.personagens[4]}, ${filmao.personagens[5]}, ${filmao.personagens[6]}, ${filmao.personagens[7]}`)

//4.
pessoa = {
    nome: 'pedro',
    idade: 30,
    email: 'pedrojoao@gmail.com',
    endereco: 'rua joao augusto, 23, brasil'

}

function anonimizarPessoa(objeto) {

    return pessoaAnonima = {
        nome: 'ANÔNIMO',
        idade: objeto.idade,
        email: objeto.email,
        endereco: objeto.endereco
    }

}

console.log(anonimizarPessoa(pessoa))


// EXERCÍCIOS DE FUNÇÕES DE ARRAY
//1.

let arrayNomes = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

//a.
function maiorDeIdade(array) {

    const maioresDeIdade = arrayNomes.filter((pessoas, index, array) => {

        return pessoas.idade >= 20

    })

    console.log(maioresDeIdade)

}

maiorDeIdade(arrayNomes)

//b.
function menorDeIdade(array) {

    const menoresDeIdade = arrayNomes.filter((pessoas, index, array) => {

        return pessoas.idade < 20

    })

    console.log(menoresDeIdade)

}

menorDeIdade(arrayNomes)

//2.
const arrayDosNumeros = [1, 2, 3, 4, 5, 6]

//a.
function multiPorDois (array) {

    const multiplicaPorDois = arrayDosNumeros.map((num, index, array) => {

        return num * 2

    })

    console.log(multiplicaPorDois)

}

multiPorDois(arrayDosNumeros)

//b.
function multiPorTres (array) {

    const multiplicaPorTres = arrayDosNumeros.map((num, index, array) => {

         resultado = num * 3
         return resultado.toString()

    })

    console.log(multiplicaPorTres)

}

multiPorTres(arrayDosNumeros)

//c
function ParOuImpar(array) {

    const numerosParOuImpar = array.map((num, index, arr) => {

        if(num % 2 === 0){
            return `${num} é par`
        } else{
            return `${num} é impar`
        }


    })

    console.log(numerosParOuImpar)

}

ParOuImpar(arrayDosNumeros)

//3.
const pessoasQueremAndar = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//a.
function podemAndar(array) {

    const EssesPodemAndar = array.filter((pessoa, index, array) => {

        return pessoa.idade >= 14 && pessoa.idade < 70 && pessoa.altura >= 1.5

    })

    console.log(EssesPodemAndar)
}
podemAndar(pessoasQueremAndar)

//b.
function NaoPodemAndar(array) {

    const EssesNaoPodemAndar = array.filter((pessoa, index, array) => {

        return pessoa.idade < 14 || pessoa.altura < 1.5 || pessoa.idade >= 70 

    })

    console.log(EssesNaoPodemAndar)
}
NaoPodemAndar(pessoasQueremAndar)

//4.
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

arrayEmais =[]
//não canceladas

function naoCanceladas (array) {

    const naoForamCanceladas = array.filter((pessoa, index, array) => {

        if(pessoa.cancelada === false){

            if (pessoa.genero === 'masculino') {

                arrayEmais.push(`Olá, Sr. ${pessoa.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)

            }else{
                arrayEmais.push(`Olá, Sra. ${pessoa.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)

            }

        }

    })

}
naoCanceladas(consultas)

// //canceladas
function Canceladas (array) {

    const ForamCanceladas = array.filter((pessoa, index, array) => {

        if(pessoa.cancelada === true){

            if (pessoa.genero === 'masculino') {

                arrayEmais.push(`Olá, Sr. ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)

            }else{
                arrayEmais.push(`Olá, Sra. ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)

            }

        }

    })
    console.log(arrayEmais)

}
Canceladas(consultas)

 //5
 const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function resultadoContas(array) {

    array.forEach((conta, index, array) => {

        for (let num of conta.compras) {

            conta.saldoTotal -= num 

        }

    })
    

    console.log(array)

}
resultadoContas(contas)


