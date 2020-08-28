import * as fs from 'fs';
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

export function pagarConta(nome: string, cpf: string, valor: number, descricao: string, data: moment.Moment): void {
    try {
        const arrayContas = readDatabase();

        for(let conta of arrayContas) {
            if(nome === conta.nome && cpf === conta.cpf){
                const arrayExtrato = conta.listaExtrato;

                conta.saldo -= valor;

                const novoExtrato: extrato = {
                    valor,
                    data,
                    descricao
                }

                arrayExtrato.push(novoExtrato);
                console.log(`Valor pago com sucesso!`)
            }
        }
        writeToDatabase(arrayContas);
        
    } catch(error) {
        console.log(error.menssage)
    }
}

// const data = moment("11/10/2020", "DD/MM/YY");
// console.log(data.format("DD MM YY"))

pagarConta(process.argv[2], process.argv[3], Number(process.argv[4]), process.argv[5], moment(process.argv[6], "DD/MM/YYYY"))
