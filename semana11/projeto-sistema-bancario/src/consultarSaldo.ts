import * as fs from 'fs'
import {readDatabase} from './index';

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

export function consultaSaldo(nome: string, cpf: string): void {
    try {
        const arrayContas = readDatabase();

        for(const conta of arrayContas) {
            if(nome === conta.nome && cpf === conta.cpf){
                console.log(`Seu saldo é ${conta.saldo}`)
            } else {
                console.log("Seus dados não estão cadastrados")
            }
        }
    } catch(error) {
        console.log(error.menssage)
    }
}

consultaSaldo(process.argv[2], process.argv[3]);