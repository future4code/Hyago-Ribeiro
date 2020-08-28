import * as fs from 'fs'
import {readDatabase, writeToDatabase} from './index';

type extrato = {
    valor: number,
    data: string,
    descricao:string
}

type conta = {
    nome: string,
    cpf: string,
    idade: number,
    saldo: number,
    listaExtrato: extrato[]
}

export function transferencia(nome1: string, cpf1: string, nome2: string, cpf2: string, valor: number): void {
    try {
        const arrayContas = readDatabase();

        for(const conta of arrayContas) {
            if(nome1 === conta.nome && cpf1 === conta.cpf){
                conta.saldo -= valor
                console.log(`Transferência feita com sucesso`)
            }

            if(nome2 === conta.nome && cpf2 === conta.cpf){
                conta.saldo += valor
            }
        }
        writeToDatabase(arrayContas);
    } catch(error) {
        console.log(error.menssage)
    }
}

transferencia(process.argv[2], process.argv[3], process.argv[4], process.argv[5], Number(process.argv[6]));