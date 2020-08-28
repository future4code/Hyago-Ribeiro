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
            if(nome === conta.nome && cpf === conta.cpf && saldo > 0){
                conta.saldo += saldo
                console.log(`Valor depositado com sucesso!`)
            }
        }
        writeToDatabase(arrayContas);
        
    } catch(error) {
        console.log("Seus dados estão incorretor ou o valor é inferior a 1" + error.menssage)
    }
}

depositarSaldo(process.argv[2], process.argv[3], Number(process.argv[4]));