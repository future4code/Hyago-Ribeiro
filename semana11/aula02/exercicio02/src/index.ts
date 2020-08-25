import fs from 'fs';

//Exercício 1
//a) Usa-se o process.argv para acessar os parametros passados na linha de comando do node

//b)-c)
// const nome: string = process.argv[2];
// const idade: number = Number(process.argv[3]);

// const novaIDade: number = idade + 7;

// console.log(`Ola, ${nome}! Voce tem ${idade} anos. Em sete anos voce tera ${novaIDade}.`)

//Exercício 3-4
const text: string = process.argv[2];

fs.appendFileSync('./tarefas.txt', text);

const fileData: string = fs.readFileSync('./tarefas.txt').toString()

console.log(fileData)