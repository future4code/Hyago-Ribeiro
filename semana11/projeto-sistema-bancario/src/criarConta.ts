import * as fs from 'fs';
import {readDatabase, writeToDatabase} from './index';
import moment from "moment";
moment.locale("pt-br");

type extrato = {
    valor: number,
    data: string,
    descricao:string
}

type conta = {
    nome: string,
    cpf: string,
    nascimento: moment.Moment,
    saldo: number,
    listaExtrato: extrato[]
}

export function criarConta(nome: string, cpf:string, nascimento: moment.Moment, saldo: number = 0, listaExtrato: extrato[] = []): void {
    try {
        let arrayContas: conta[] = readDatabase();
        
        const novaConta: conta = {
          nome,
          cpf,
          nascimento,
          saldo,
          listaExtrato
        }
        arrayContas.push(novaConta)
        writeToDatabase(arrayContas);
        console.log("Conta criada com sucesso!")
    } catch (error) {
        console.log("Erro aos salvar os dados:" + error.message)
    }
}

criarConta(process.argv[2], process.argv[3], moment(process.argv[4], "DD/MM/YYYY"))

