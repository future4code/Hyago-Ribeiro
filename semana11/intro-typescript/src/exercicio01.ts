//a)
// const minhaString: string = 5;
//O código acusa que o valor que estou tentando declarar
//não é a tipagem que setei para minha variável

//b)
const meuNumero: number = 10;
//Se quisermos que nossa variável aceita valores como numeros ou strings
//precisamos mudar sua tipagem para 'any', que vai fazer ele aceitar qualquer tipo

//c)-d)-e)
enum CORES_DO_ARCO_IRIS {
    VIOLETA = "VIOLETA",
    ANIL = "ANIL",
    AZUL = "AZUL",
    VERDE = "VERDE",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERMELHO = "VERMELHO"
}

type person = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCO_IRIS
}

const pessoa1: person = {
    nome: "João",
    idade: 25,
    corFavorita: CORES_DO_ARCO_IRIS.VERDE
}

const pessoa2: person = {
    nome: "Pedro",
    idade: 27,
    corFavorita: CORES_DO_ARCO_IRIS.LARANJA
}

const pessoa3: person = {
    nome: "Airton",
    idade: 32,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

