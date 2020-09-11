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
        const verificaCpf: number = 1
        
        arrayContas.map((conta) => {
            if(conta.cpf === cpf) {
                return 1
            } else {
                return 0
            }
        })
        const today = moment()
        const idade = today.diff(nascimento, 'years')
        if(idade >= 18 && verificaCpf === 0) {
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
        } else {
            console.log("Você não pode criar conta, pois é menor de idade ou o CPF já está cadastrado.")
        }
    } catch (error) {
        console.log("Erro aos salvar os dados:" + error.message)
    }
}


criarConta(process.argv[2], process.argv[3], moment(process.argv[4], "DD/MM/YYYY"))

