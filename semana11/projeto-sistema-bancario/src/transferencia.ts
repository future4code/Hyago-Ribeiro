import * as fs from 'fs'
import {readDatabase, writeToDatabase} from './index';
import moment from "moment";
moment.locale("pt-br");

type extrato = {
    valor: number,
    data: moment.Moment,
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
            if(nome1 === conta.nome && cpf1 === conta.cpf && conta.saldo > valor){
                const arrayExtrato = conta.listaExtrato;
                conta.saldo -= valor

                const novoExtrato: extrato = {
                    valor,
                    data: moment(),
                    descricao: `Transferência de dinheiro para ${nome2}.`
                }

                arrayExtrato.push(novoExtrato);
                console.log(`Transferência feita com sucesso`)
            } else {
                console.log("Os dados estão errados ou não possuí saldo suficiente para essa transferencia.")
            }

            if(nome2 === conta.nome && cpf2 === conta.cpf){
                conta.saldo += valor
            } else {
                console.log("Conta do destinatário não existe.")
            }
        }
        writeToDatabase(arrayContas);
    } catch(error) {
        console.log(error.menssage)
    }
}

transferencia(process.argv[2], process.argv[3], process.argv[4], process.argv[5], Number(process.argv[6]));