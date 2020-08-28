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

export function depositarSaldo(nome: string, cpf: string, saldo: number): void {
    try {
        const arrayContas = readDatabase();

        for(let conta of arrayContas) {
            if(nome === conta.nome && cpf === conta.cpf && saldo > 0){
                conta.saldo += saldo

                const arrayExtrato = conta.listaExtrato;
                const today = moment()
                const novoExtrato: extrato = {
                    valor: saldo,
                    data: today,
                    descricao: "Depósito de dinheiro"
                }

                arrayExtrato.push(novoExtrato);

                console.log(`Valor depositado com sucesso!`)
            } else {
              console.log("O nome ou cpf estão errados. O valor precisa ser maior que 0.")
            }
        }
        writeToDatabase(arrayContas);
        
    } catch(error) {
        console.log("Seus dados estão incorretor ou o valor é inferior a 1" + error.menssage)
    }
}

depositarSaldo(process.argv[2], process.argv[3], Number(process.argv[4]));