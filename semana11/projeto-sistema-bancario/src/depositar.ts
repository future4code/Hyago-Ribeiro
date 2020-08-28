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

export function depositarSaldo(nome: string, cpf: string, saldo: number): void {
    try {
        const arrayContas = readDatabase();

        for(let conta of arrayContas) {
            if(nome === conta.nome && cpf === conta.cpf){
                conta.saldo += saldo
                console.log(`Valor depositado com sucesso!`)
            } else {
                console.log("Seus dados não estão cadastrados")
            }
        }
        writeToDatabase(arrayContas);
        
    } catch(error) {
        console.log(error.menssage)
    }
}

depositarSaldo(process.argv[2], process.argv[3], Number(process.argv[4]));