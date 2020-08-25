//Exercício 1
//a) Usa-se o process.argv para acessar os parametros passados na linha de comando do node

//b)-c)
// const nome: string = process.argv[2];
// const idade: number = Number(process.argv[3]);

// const novaIDade: number = idade + 7;

// console.log(`Ola, ${nome}! Voce tem ${idade} anos. Em sete anos voce tera ${novaIDade}.`)

//Exercício 2-4
const operacao: string = process.argv[2];
const num1: number = Number(process.argv[3]);
const num2: number = Number(process.argv[4]);

let resultado: number = 0

    switch(operacao){
        case "add":
            resultado =  num1 + num2
        break;
        case "sub":
            resultado =  num1 - num2
        break;
        case "mult":
            resultado =  num1 * num2
        break;
        case "div":
            resultado =  num1 / num2
        break;
    }

console.log(`A resposta e: ${resultado}`)
