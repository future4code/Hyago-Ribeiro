import moment, { Moment } from "moment";
moment.locale("pt-br");



type evento = {
    nome: string,
    descricao: string,
    dataInicio: moment.Moment,
    dataFinal: moment.Moment
}

const agendaTotal: evento[] = [
    {
        nome: "Viagem praia",
        descricao: "viagem para descansar e aliviar o estresse",
        dataInicio: moment("22/09/2020 9:00", "DD/MM/YYYY HH:mm"),
        dataFinal: moment("23/09/2020 18:00", "DD/MM/YYYY HH:mm")
    },
    {
        nome: "Mercado",
        descricao: "Ida ao mercado para reabastecimento semanal",
        dataInicio: moment("24/09/2020 13:00", "DD/MM/YYYY HH:mm"),
        dataFinal: moment("24/09/2020 15:00", "DD/MM/YYYY HH:mm")
    }
]

const exibirAgenda = (totalDeEventos: evento[]) : void => {
    totalDeEventos.forEach((evento: evento) => {
        const duracaoEvento: number = evento.dataFinal.diff(evento.dataInicio, 'minutes');

        const hoje = moment();
        const diasAteEvento = evento.dataInicio.diff(hoje, 'days');

        console.log(`
            Nome: ${evento.nome}
            Horário de início: ${evento.dataInicio.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário do fim: ${evento.dataFinal.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Descrição: ${evento.descricao}
            Duração: ${duracaoEvento} minutos
            Faltam: ${diasAteEvento} dias para o evento
        `)
    })
}

const adicionarEvento = (nome: string, descricao: string, dataInicio:moment.Moment, dataFinal:moment.Moment): void => {
    if(!nome || !descricao || !dataInicio || !dataFinal) {
        console.log("Erro, digite informações válidas")
        return;
    }

    const difDataIniciHoje = dataInicio.diff(moment(), "seconds");
    const difDataFinalHoje = dataFinal.diff(moment(), "seconds");

    if(difDataIniciHoje < 0 && difDataFinalHoje < 0) {
        console.log("Datas precisam ser superiores ao dia de hoje");
        return;
    }

    agendaTotal.push({
        nome,
        descricao,
        dataInicio,
        dataFinal
    });

    console.log("Evento adicionado com sucesso!")
};

// const nome: string = process.argv[2];
// const descricao: string = process.argv[3];
// const data1 = moment(process.argv[4]);
// const data2 = moment(process.argv[5]);

const data1 = moment("22/11/2020 9:00", "DD/MM/YYYY HH:mm")
const data2 = moment("24/11/2020 9:00", "DD/MM/YYYY HH:mm")

adicionarEvento("Passeio de moto", "passeio de moto pelas belezas catarinense", data1, data2)

exibirAgenda(agendaTotal);