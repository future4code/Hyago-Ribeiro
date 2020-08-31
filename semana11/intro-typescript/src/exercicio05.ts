
function imprimeDados(numero1: number, numero2: number) {
    const soma: number = numero1 + numero2;
    const subtração: number = numero1 - numero2;
    const multi: number = numero1 * numero2;
    const maior: number = numero1 > numero2 ? numero1 : numero2;

    type result = {
        soma: number,
        subtracao:number,
        multiplicacao: number,
        maiorNumero: number,
    }

    const resultado: result = {
        soma: soma,
        subtracao: subtração,
        multiplicacao: multi,
        maiorNumero: maior
    }

    return resultado
}

console.log(
    imprimeDados(10, 20)
)