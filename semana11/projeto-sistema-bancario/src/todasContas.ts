import {readDatabase} from './index';
import moment from "moment";
moment.locale("pt-br");

type conta = {
    nome: string,
    cpf: string,
    nascimento: moment.Moment,
    saldo: number,
    listaExtrato: extrato[]
}

type extrato = {
    valor: number,
    data: string,
    descricao:string
}

const todasContas = readDatabase();

const exibirContar = (todasContas:conta[]): void => {
    todasContas.map((conta:conta) => {
        return console.log(
            `
            Nome: ${conta.nome}
            CPF: ${conta.cpf}
            Data de Nascimento: ${moment(conta.nascimento).format("DD/MM/YYYY")}
            Saldo: ${conta.saldo}
            Extrato: ${conta.listaExtrato.map((extrato:extrato) => {
                return (
                    `
                    Valor: ${extrato.valor}
                    Descrição: ${extrato.descricao}
                    Data: ${extrato.data}
                    `
                )
            })}
            `
        )
    })
}

exibirContar(todasContas)