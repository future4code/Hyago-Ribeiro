//EXERCÍCIO 1

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

console.log(minhaFuncao(8))

//a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
//Não vai retornar nada, pois o primeiro for não consegue executar na segunda volta, já que o i+=2 deixa o i com valor de 2, impedindo que dê prosseguimento. Retornando apenas o array vazio.

//b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
//Vai retornar 0, 1, 0, 1, 2, 3. Pois o primeiro for executa até 4 que é menor que 5 e o segundo for, executa empurrando para o array até 3, que é menor que i.

//c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
// vai retornar 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5

//EXERCÍCIO 2

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

//a. Explicite quais são as saídas impressas no console
    //As saídas do console.log é o número da posição index em que o nome está posicionado. No caso do terceiro console.log, não será encontrado, porque o nome Paula não pode ser encontrado dentro do array, apenas o nome "Paulinha".

//b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
    // Funcionária tranquilamente, porque tudo seria mantido com a mesma lógica. A função segue trabalhando com um array e navegando por ele, para quando encontrar o compatível com o parametro passado no console, ele seja identificado o index.


//EXERCÍCIO 3
function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }

  //A função em questão pega um array e cria um novo array. Precisa ser passado para ela como parametro um array, a partir disso a função faz um for of nesse array, e usa a variável x(que contém o elemento do array analisado) para somar ao resultadoA. Já no resultadoB o processo é o mesmo, mas invés de soma é multiplicado. Por fim ela empurrada para o arrayFinal os resultados de A e B, e exibe o array final com 2 elementos.
  //Usaria o nome de criadorDeArray

  //EXERCÍCIO 4
//a.


function idadeCachorro(a){
    let idade = a * 7
    return idade
}

console.log(idadeCachorro(prompt("Qual sua idade?")))

b.

function pessoa(nome, idade, endereco, estudante){

    if (estudante){
        return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou estudante.`
    } else { 
        return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e não sou estudante.`
    }

    

}

alert(pessoa("Julio", 23, "beco do nunes", false))


//EXERCÍCIO 5

function seculoDoMomento(ano){

    let seculos = [`I`, `II`, `III`, `IV`, `VI`, `VII`, `VIII`, `IX`, `XI`, `XII`, `XIII`, `XIV`, `XV`, `XVI`, `XVII`, `XVIII`, `XIX`, `XX`, `XXI`]
    let anos = [1, 101, 201, 301, 401, 501, 601, 701, 801, 901, 1001, 1101, 1201, 1401, 1501, 1601, 1701, 1801, 1901, 2001, 2101]

    for(let i = 0; i < 21; i++){
        if (ano >= anos[i] && ano < anos[i+1]){

            return `O ano ${ano} pertende ao século ${seculos[i]}`

        }
    }
}

console.log(seculoDoMomento(300))

//EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a.

let numArray = (array) => {
    
    return array.length

}

console.log(numArray(array))

//b.


let numPar = (array) => {

    let arrayPar = []
    let arrayImpar = []


    for(let i of array){

        if(i % 2 === 0){
            
            arrayPar.push(i)

        } else {

            arrayImpar.push(i)

        }

    }

    return `É par ${arrayPar}. \nNão é par ${arrayImpar}`

}

console.log(numPar(array))


//c.

let totalPar = (array) => {

    let arrayPar = []
    let arrayImpar = []


    for(let i of array){

        if(i % 2 === 0){
            
            arrayPar.push(i)

        } else {

            arrayImpar.push(i)

        }

    }

    return arrayPar.length

}

console.log(totalPar(array))